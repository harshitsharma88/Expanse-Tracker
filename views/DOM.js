window.onload=getAll;
const ul=document.querySelector('ul');

function getAll(){
    axios.get('http://localhost:3000/expanse')
    .then(results=>{
        results.data.forEach(element => {
            display(element,element.id);
            });
    })

}


function handlesubmit(event){
    event.preventDefault();
    const obj={
        amount:event.target.amount.value,
        desc:event.target.desc.value,
        catg:event.target.catg.value
}
    axios.post('http://localhost:3000/expanse/add-expanse',obj)
    .then(result=>{
        display(result.data,result.data.id);
    })
    .catch(err=>console.log(err));

 
    document.querySelector("#amount").value="";
    document.querySelector('#desc').value="";
    document.querySelector('#catg').value="None";

}

function display(obj,id){
   

    const li=document.createElement('li');
    
    li.textContent=`${obj.amount} ${obj.desc} ${obj.catg} `;
    li.setAttribute('id',id);

    const dltbtn= document.createElement('button');
    dltbtn.innerText='Delete';

    const editbtn=document.createElement('button');
    editbtn.innerText='Edit';

    li.appendChild(dltbtn);
    li.appendChild(editbtn);

    ul.appendChild(li);

    dltbtn.addEventListener('click',(event)=>{
        axios.delete(`http://localhost:3000/expanse/delete-expanse/${id}`)
        .then(()=>{
            dltbtn.parentElement.remove();
        })
    })

    editbtn.addEventListener('click',(event)=>{

        axios.delete(`http://localhost:3000/expanse/delete-expanse/${id}`)
        .then(()=>{
            document.querySelector("#amount").value=obj.amount;
            document.querySelector("#desc").value=obj.desc;
            document.querySelector("#catg").value=obj.catg;
            editbtn.parentElement.remove();
        })
        .catch(err=>console.log(err));
        
        
    })



}

