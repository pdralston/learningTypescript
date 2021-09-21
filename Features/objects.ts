const profile = {
    name: "alex",
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    //ES2015 inner function syntax
    setAge(newAge: number): void {
        this.age = newAge;
    }
};

//ES2015 destructuring
//usually do not need to use annotation here,
//but this is the syntax in case we do
const { age }: {age: number} = profile;
const {coords: {lat, lng}}: {coords: {lat: number; lng: number}} = profile;