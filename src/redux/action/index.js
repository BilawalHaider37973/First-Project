export const Auth = (data) => {
  console.log("Action call ", data.email, data.uid);
  return {
    type: "UserAuth",
    payload: data,
  };
};

export const UnAuth = (data) => {
  return {
    type: "UserUnAuth",
    payload: data,
  };
};

// export const deleteTodo = (id, data) => {
//   console.log(id, data);
//   return {
//     type: "DELETE_TODO",
//     id: id,
//   };
// };

// export const editTodo = (id, data, edit) => {
//   // console.log(id,data,edit);
//   return {
//     type: "EDIT_TODO",
//     editid: id,
//     editdata: data,
//     editvalue: edit,
//   };
// };
