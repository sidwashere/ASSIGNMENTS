

//First State State



menu.startState('getFirstName', {
    run: () => {
        let firstName = menu.val;
        menu.session.set('firstName', firstName)
        .then( () => {
            menu.con('Enter your last name');
        })
    }
    ...
})
...
menu.state('getLastName', {
    run: () => {
        let lastName = menu.val;
        menu.session.set('lastName', lastName)
        .then( () => {
            menu.con('Enter your Age');
        })
    }
})

...
menu.state('getAge', {
    run: () => {
        let age = menu.val;
        menu.session.set('age', age)
        .then( () => {
            menu.con('Enter your Age');
        })
    }
})

//This fucntion check for Age at Validates wether the person is still elibigble for work.
function countAge() {
   
        if (age <= 50()) 
            .then (menu.end('Your name is 'firstName ' and age is ' + age);       

        else menu.end('You are old, Please Retire')
        };
   
 