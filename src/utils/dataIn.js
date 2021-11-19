import user from "./user";

function dataIn () {
    let userName = null || document.getElementById('userName');
    let userCount = null || document.getElementById('userCount');

    userName.innerHTML = user.name;
    userCount.innerHTML = user.cuenta;
};

export default dataIn;