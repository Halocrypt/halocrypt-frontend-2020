import Component from "@hydrophobefireman/ui-lib";
const SWIPE_THRESHOLD = 145;
const __dragTarget = `${+new Date()}`;
function getTranslate(xPos, yPos) {
  return `translate3d(${xPos}px, ${yPos}px, 0)`;
}

export default class DraggableParent extends Component {
  state = {
    active: false,
    currentX: 0,
    currentY: 0,
    initialX: 0,
    initialY: 0,
    xOffset: 0,
    yOffset: 0,
  };
  getEventListeners() {
    return {
      onTouchStart: this.dragStart,
      onTouchEnd: this.dragEnd,
      onTouchMove: this.drag,
      onMouseDown: this.dragStart,
      onMouseUp: this.dragEnd,
      onMouseMove: this.drag,
    };
  }

  dragStart = (e) => {
    const state = this.state;
    let initialX = state.initialX,
      initialY = state.initialY,
      active = state.active;
    if (e.type === "touchstart") {
      initialX = e.touches[0].clientX - this.state.xOffset;
      initialY = e.touches[0].clientY - this.state.yOffset;
    } else {
      initialX = e.clientX - this.state.xOffset;
      initialY = e.clientY - this.state.yOffset;
    }

    if (e.path.some((x) => x.id === __dragTarget)) {
      active = true;
    }
    this.setState({ initialY, initialX, active });
  };
  setCoords = (x, y) => this.setState({ currentX: x, currentY: y });
  _checkThreshHoldExeeded = (initialX, initialY) => {
    if ([initialX, initialY].some((x) => Math.abs(x) > SWIPE_THRESHOLD)) {
      this.props.swipeThresholdExeeded(this.setCoords);
      return true;
    }
  };
  dragEnd = (e) => {
    if (
      this._checkThreshHoldExeeded(this.state.currentX, this.state.currentY)
    ) {
    } else {
      return this.setState({
        active: false,
        currentX: 0,
        currentY: 0,
        initialX: 0,
        initialY: 0,
        xOffset: 0,
        yOffset: 0,
      });
    }
  };
  drag = (e) => {
    if (this.state.active) {
      const state = this.state;
      e.preventDefault();
      let currentX = state.initialX,
        currentY = state.initialY;
      if (e.type === "touchmove") {
        currentX = e.touches[0].clientX - this.state.initialX;
        currentY = e.touches[0].clientY - this.state.initialY;
      } else {
        currentX = e.clientX - this.state.initialX;
        currentY = e.clientY - this.state.initialY;
      }
      currentX = this.props.onlyY ? 0 : currentX;
      currentY = this.props.onlyX ? 0 : currentY;
      const xOffset = currentX;
      const yOffset = currentY;
      if (this._checkThreshHoldExeeded(currentX, currentY)) {
        return;
      }
      this.setState({ currentX, currentY, xOffset, yOffset });
      this.props.onDrag && this.props.onDrag(currentX, currentY);
    }
  };
  render(
    {
      dragChildName: DragChildName,
      dragChildProps,
      children,
      onlyX,
      onlyY,
      swipeThresholdExeeded,
      onDrag,
      ...props
    },
    state
  ) {
    const { style, ...dcp } = dragChildProps;
    return (
      <div {...this.getEventListeners()} {...props}>
        <DragChildName
          {...dcp}
          id={__dragTarget}
          style={{
            ...style,
            zIndex: 100,
            transform: getTranslate(state.currentX, state.currentY),
            transition:
              state.currentX || state.currentY ? "0s" : "0.3s ease-in-out",
          }}
        />
        {children}
      </div>
    );
  }
}
