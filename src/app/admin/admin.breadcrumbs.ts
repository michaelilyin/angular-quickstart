export const breadcrumbs = {
  admin: 'Administration',
  users: 'Users',
  user: function(data) {
    return data.user.name
  }
};
