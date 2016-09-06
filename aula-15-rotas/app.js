angular.module('BeMEAN', ['ngAnimate', 'ngMessages', 'ngRoute'])
    .config(function($routeProvider){
        $routeProvider
        .when('/users', {
            templateUrl: 'views/users.html',
            controller: 'UserController',
            controllerAs: 'User'
        })
        .when('/users/:id', {
            templateUrl: 'views/user-details.html',
            controller: 'UserDetailsController',
            controllerAs: 'UserDetails'
        })
        .otherwise({
            redirectTo: '/index'
        });
    })
    .controller('UserController', UserController)
    .controller('UserDetailsController', UserDetailsController);

        function UserController() {
            var vm = this;
            vm.editing = false;
            vm.reverse = false;
            vm.modelOptions = {
                updateOn: 'blur default',
                debounce: {
                    default: 1000,
                    blur: 0
                }
            }
            vm.regexPhone = /9?([0-9]{4})-?([0-9]{4})/;
            vm.users = [
                            {name: 'Jose', email: 'jrobertoonb@gmail.com', type: 'teacher', active: true},
                            {name: 'Giovana', email: 'giovana@gmail.com', type: 'teacher', active: true},
                            {name: 'Franciele', email: 'fran@gmail.com', type: 'student', active: false},
                            {name: 'Maria', email: 'maria@gmail.com', type: 'student', active: false},
                            {name: 'Julia', email: 'julia@gmail.com', type: 'student', active: true}
                        ];
            function getKeyLength() {
                return Object.keys(angular.copy(vm.users[0])).length;
            }

            vm.keysLength = getKeyLength();
            vm.orderByName = orderByName;

            function orderByName() {
                vm.predicate = 'name';
                vm.reverse = !vm.reverse;
            }

            vm.orderByEmail = orderByEmail;
            function orderByEmail() {
                vm.predicate = 'email';
                vm.reverse = !vm.reverse;
            }

            vm.add = add;
            function add(user) {
                vm.users.push(angular.copy(user));
                vm.form = {};
            }

            vm.remove = remove;
            function remove(users) {
                vm.users = users.filter(function(el){ return !el.selecionado });
            }

            vm.edit = edit;
            function edit(user, index) {
                vm.form = angular.copy(user);
                vm.form.index = index;
                vm.editing = true;
            }

            vm.save = save;
            function save(user) {
                var users = vm.users.map(function(el, i) {
                if(i === user.index) {
                    delete user.index;
                    return user;
                }
                return el;
                });
                vm.users = users;
                vm.editing = false;
            }

            vm.submitForm = submitForm;
            function submitForm(user) {
                add(user);
            }
    }

    function UserDetailsController($routeParams) {
            var vm = this;
            vm.routeParams = $routeParams;
            vm.editing = false;
            vm.reverse = false;
            vm.modelOptions = {
                updateOn: 'blur default',
                debounce: {
                    default: 1000,
                    blur: 0
                }
            }
            vm.regexPhone = /9?([0-9]{4})-?([0-9]{4})/;
            vm.users = [
                            {name: 'Jose', email: 'jrobertoonb@gmail.com', type: 'teacher', active: true},
                            {name: 'Giovana', email: 'giovana@gmail.com', type: 'teacher', active: true},
                            {name: 'Franciele', email: 'fran@gmail.com', type: 'student', active: false},
                            {name: 'Maria', email: 'maria@gmail.com', type: 'student', active: false},
                            {name: 'Julia', email: 'julia@gmail.com', type: 'student', active: true}
                        ];
            function getKeyLength() {
                return Object.keys(angular.copy(vm.users[0])).length;
            }

            vm.keysLength = getKeyLength();
            vm.orderByName = orderByName;

            function orderByName() {
                vm.predicate = 'name';
                vm.reverse = !vm.reverse;
            }

            vm.orderByEmail = orderByEmail;
            function orderByEmail() {
                vm.predicate = 'email';
                vm.reverse = !vm.reverse;
            }

            vm.add = add;
            function add(user) {
                vm.users.push(angular.copy(user));
                vm.form = {};
            }

            vm.remove = remove;
            function remove(users) {
                vm.users = users.filter(function(el){ return !el.selecionado });
            }

            vm.edit = edit;
            function edit(user, index) {
                vm.form = angular.copy(user);
                vm.form.index = index;
                vm.editing = true;
            }

            vm.save = save;
            function save(user) {
                var users = vm.users.map(function(el, i) {
                if(i === user.index) {
                    delete user.index;
                    return user;
                }
                return el;
                });
                vm.users = users;
                vm.editing = false;
            }

            vm.submitForm = submitForm;
            function submitForm(user) {
                add(user);
            }
    }