export const routes = [
    { path: "", component: Home}, //root path
    { path: "/user/:id", component: User}, // :id は動的なURL
  ]

//   routing のネスト
//   export const routes = [
//     { path: "", component: Home },
//     { path: "/user/", component: User, children: [
//         { path: "", component: UserStart },
//         { path: ":id", component: UserDetail },
//         { path: ":id/edit", component: UserEdit }
//     ]}
// ]