let url = "https://65e18828a8583365b316a2d9.mockapi.io/user"
//console.log("1")
const create = document.getElementById('create-btn')
const name = document.getElementById('input-name')
const email = document.getElementById('input-email')

function submitBtn() {
    console.log(name.value, email.value);
    createUser(name.value,email.value)
}
create.addEventListener('click',submitBtn)
async function createUser(name, email) {
    /*
    let newUser = {
        "name": name,
        "email": email
    }
    */
    let newUser = {name,email}
    let res = await fetch(url, {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newUser) // browser sends and accepts req in string
    })
    let data = await res.json()
    console.log(data)
    createTableRow(data.name,data.email)
  
}
let tbodyContainer = document.getElementById('tbodyContainer')
function createTableRow(val1, val2,id) {
    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    td1.innerHTML = val1
    td1.setAttribute('id', `name${id}`)
    td2.innerHTML = val2
    td2.setAttribute('id', `email${id}`)
    td3.innerHTML=`
    <button id="edit${id}" class="btn btn-primary"onclick="editUser('${id}','${val1}','${val2}')" data-toggle="modal" data-target="#exampleModal${id}">Edit</button>
    <button id="del${id}" class="btn btn-danger" onclick="deleteUser(${id})">Delete</button>
    `
    tr.append(td1, td2,td3)
    tbodyContainer.append(tr)
    
}
async function getData() {
    let res = await fetch(url);
    let data = await res.json();
    //console.log(data)
    data.map(e => {
     
        createTableRow(e.name, e.email,e.id);
    })
}
getData()
async function editUser(id,val1,val2) {
    //console.log("edit btn called")
    //console.log(id,val1,val2)
    let res = await fetch(url + "/" + id);
    let data = await res.json();
    console.log(data)
    let modal = document.createElement('span')
    modal.innerHTML =`    <!-- Modal -->
    <div class="modal fade" id="exampleModal${id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                     <div class="input-group mb-3 w-100">
            <span class="input-group-text" id="basic-addon1">Name</span>
            <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" id="modal-input-name${id}" value="${val1}">
        </div>
        <div class="input-group mb-3 w-100">
            <span class="input-group-text" id="basic-addon2">Email</span>
            <input type="email" class="form-control" aria-label="Email" aria-describedby="basic-addon1" id="modal-input-email${id}" value="${val2}">
        </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="updateUser(${id})">Save changes</button>
                </div>
            </div>
        </div>
    </div>
`
    document.body.append(modal)

}
async function updateUser(id) {
    console.log("Update button called")
    console.log(id)
    const modal_name = document.getElementById('modal-input-name' + id)
    const modal_email = document.getElementById('modal-input-email'+id)
    let update_user = {
        "name": modal_name.value,
        "email": modal_email.value
    }
    let res = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(update_user) // browser sends and accepts req in string
    });

    let data = await res.json()
    console.log(data)
    document.getElementById(`name${id}`).innerText = data.name
    document.getElementById(`email${id}`).innerText = data.email
}
    
async function deleteUser(userId) {
    console.log(userId)
    let res = await fetch(`${url}/${userId}`, { method: "DELETE" })
    let data = await res.json();
    console.log(data)
    tbodyContainer.innerHTML = ""
    getData()

}
