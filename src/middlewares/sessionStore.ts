import * as session from "express-session";

const useSessionStorage = (app: any): void => {
  if (app.get("env") === "production") {
    app.set("trust proxy", 1);
    app.use(
      session({
        secret: "keyboard cat",
        cookie: {
          secure: true,
        },
      })
    );
    return;
  }
  app.use(
    session({
      secret: "keyboard cat",
      cookie: {},
    })
  );
};

export { useSessionStorage };
