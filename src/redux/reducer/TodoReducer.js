const UserAuth = {
  email: "",
  auth: false,
  uid: "",
};

const TodoReducer = (state = UserAuth, action) => {
  switch (action.type) {
    case "UserAuth":
      console.log("UserAuth Chal Gya");
      return (state.UserAuth = {
        email: action.payload.email,
        auth: true,
        uid: action.payload.uid,
      });

    case "UserUnAuth":
      return (state.UserAuth = { email: "", auth: false, uid: "" });

    default:
      return state;
  }
};

export default TodoReducer;
