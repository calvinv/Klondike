import UsersEditRoute from 'appkit/routes/users/edit';

export default UsersEditRoute.extend({
    authorizedApiName: 'users.put',

    model: function (params) {
        return this.get('store').createModel('user');
    },

    setupController: function(controller, model) {
        controller.reset();
        this._super(controller, model);
    }
});
