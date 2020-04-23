import os
import subprocess
import sys
import shutil
import json

cd = os.getcwd()
build_dir = os.path.join(cd, "docs")

if __name__ == "__main__":
    if os.path.isdir(build_dir):
        shutil.rmtree(build_dir)
    shutil.copyfile("webpack.config.js", "webpack.config.prod.js")
    pr = subprocess.Popen(["npm", "run", "build"])
    pr.wait()
    print("adding CNAME")
    with open(os.path.join(build_dir, "CNAME"), "w") as f:
        f.write("halocrypt.com")
    print("copying 404.html")
    shutil.copyfile("404.html", os.path.join(build_dir, "404.html"))
    os.remove("webpack.config.prod.js")
