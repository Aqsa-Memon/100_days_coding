function createObject(key: string, value: string) {
    let dynamicObject = {};

    dynamicObject[key] = value;
    return dynamicObject;
   }
   
   let userPreference = createObject("theme", "dark");
   
   console.log(userPreference);
   