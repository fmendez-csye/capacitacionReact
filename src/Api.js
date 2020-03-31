const usersAPI = {
    users: [
        {
            id: 1,
			firstName: "Fabian",
			lastName: "Mendez",
			userName: "famend",
            project: "Agil"
        },
        {
            id: 2,
			firstName: "Jason",
			lastName: "Gonzales",
			userName: "jgonzales",
            project: "Agil"
        },
        {
            id: 3,
			firstName: "Julio",
			lastName: "Chevez",
			userName: "jchevez",
            project: "Averías"
        },
        {
            id: 4,
			firstName: "Kathya",
			lastName: "Arias",
			userName: "karias",
            project: "Coordinadora"
        },
        {
            id: 5,
			firstName: "Peter",
			lastName: "Rodriguez",
			userName: "prodig",
            project: "Empresariales"
        },        {
            id: 6,
			firstName: "Michael",
			lastName: "Rodriguez",
			userName: "mrodri",
            project: "Equipos terminales"
		},
		{
			id:7,
			firstName: "Oscar",
			lastName: "Rodriguez",
			userName: "ovega",
			project: "Empresariales"
		}
    ],
    all: function() {
        return this.users;
    },
    get: function(id) {
        return this.users.find(u => u.id === id);
    }
};

export default usersAPI;
