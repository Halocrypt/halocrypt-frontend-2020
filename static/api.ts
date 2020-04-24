export type UserData = {
  id: string;
  name: string;
  current_level: number;
  is_admin: boolean;
  is_disqualified: boolean;
  last_question_answered_at: number;
  has_verified_email: boolean;
  secure_data?: { email: string; school: string; ig_user_id?: string };
};
export type Hint = {
  type: "text" | "image" | "video" | "link";
  content: "string";
};
export type Question = {
  question_level: number;
  question: string;
  hints: Hint[];
  special: any[];
};
type Error = { error: string; reason?: string };
type APIResponse<R> = { data: R };
interface GenericResponse<T = { success: string }> {
  error: Error;
  success: APIResponse<T>;
}

export namespace UserRoutes {
  export namespace authenticate {
    export interface request {
      user: string;
      password: string;
    }
    export type response = GenericResponse<UserData>;
  }
  export namespace create {
    export interface request {
      user: string;
      name: string;
      school: string;
      email: string;
      password: string;
      ig_user_id?: string;
    }
    export type response = GenericResponse<UserData>;
  }
  export namespace forgotPassword {
    export interface request {
      user: string;
    }
    export type response = GenericResponse;
  }
  export namespace getUserDetails {
    export type response = GenericResponse<UserData>;
  }
  export namespace checkPasswordToken {
    export interface request {
      token: string;
      new_password: string;
    }
    export type response = GenericResponse;
  }
  export namespace verifyEmail {
    export interface request {
      user: string;
    }
    export type response = GenericResponse;
  }
  export namespace checkEmailToken {
    export interface request {
      token: string;
    }
    export type response = GenericResponse;
  }
  export namespace checkAuth {
    export type response = GenericResponse<{ isLoggedIn: boolean }>;
  }
}

export namespace PlayRoutes {
  export namespace getLeaderboard {
    export type response = GenericResponse<UserData[]>;
  }
  export namespace getQuestion {
    export type response = GenericResponse<Question>;
  }
  export namespace answerQuestion {
    export interface request {
      answer: string;
    }
    export type response = GenericResponse<{
      result: boolean;
      nextLevel?: number;
    }>;
  }
}
export namespace AdminRoutes {
  export namespace createAdminAccount {
    export interface request {
      user: string;
      name: string;
      school: string;
      email: string;
      password: string;
      ig_user_id?: string;
      token: string;
    }
    export type response = GenericResponse<UserData>;
  }
  export namespace elevateStatus {
    export interface request {
      user: string;
      token: string;
    }
    export type response = GenericResponse<UserData>;
  }
  export namespace getUsers {
    export type response = GenericResponse<UserData[]>;
  }
  export namespace addQuestion {
    export type request = Question;
    export type response = GenericResponse<Question>;
  }
  export namespace editQuestion {
    export type request = addQuestion.request;
    export type response = addQuestion.response;
  }
  export namespace getLatestQuestion {
    export type response = GenericResponse<{ question_number: number }>;
  }
  export namespace setLevel {
    export interface request {
      user: string;
      level: number;
    }
    export type response = GenericResponse;
  }
  export namespace deleteUser {
    export interface request {
      user: string;
    }
    export type response = GenericResponse;
  }
  export namespace disqualifyUser {
    export interface request {
      user: string;
    }
    export type response = GenericResponse;
  }
  export namespace requalifyUser {
    export interface request {
      user: string;
    }
    export type response = GenericResponse;
  }
}
