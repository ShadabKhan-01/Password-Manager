export const SubmitAction = async (e,SetsiteArray) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(form));
    form.reset();
    console.log(JSON.stringify(formData));
    let req = await fetch("http://localhost:3000/",{method: "POST", headers: {"Content-Type": "application/json",},body: JSON.stringify(formData),});
    let res = await req.json();
    SetsiteArray(res);
}

export const getdata = async (SetsiteArray) => {
    let req = await fetch("http://localhost:3000/");
    let data = await req.json();
    SetsiteArray(data);
}

export const deleteData = async(props)=>{
    let req = await fetch("http://localhost:3000/",{method: "DELETE", headers: {"Content-Type": "application/json",},body: JSON.stringify({Website:props.Website,Username:props.Username,pass:props.pass}),});
    let res = await req.json();
    return res;
}