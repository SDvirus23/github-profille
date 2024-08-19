const APIURL = "https://api.github.com/users/";
const main=document.querySelector("#main");

const getuser= async (username)=>{
   const response=await fetch(APIURL+username);
   const data= await response.json();
   console.log(data);
   const card=`
    <div class="card">
            <div>
                <img class="avatar" src=${data.avatar_url} alt="Florin Pop">
            </div>
            <div class="user-info">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>

                <ul class="info">
                    <li>${data.followers}<strong>Followers</strong></li>
                    <li>${data.following}<strong>Following</strong></li>
                    <li>${data.public_repos}<strong>Repos</strong></li>
                </ul>

                <div id="repos">
                  

                </div>
            </div>
        </div>
   `
   main.innerHTML=card;
   getrepos(username);
}
getuser("SDvirus23");
  

const getrepos=async (username)=>{
    const repos=document.querySelector("#repos");
    const response=await fetch(APIURL+username+"/repos");
    const data=await response.json();
     data.forEach((item) => {
     const ele=document.createElement("a");
         ele.classList.add("repo");
         ele.href=item.html_url;
         ele.innerText=item.name;
         ele.target="_blank";
         repos.appendChild(ele);
     });
}
const formsubmit=()=>{
    const searchbox=document.querySelector("#search");
    if(searchbox.value!=""){
        getuser(searchbox.value);
        searchbox.value="";
    }
    return false;
}


{/* 
<a class="repo" href="#" target="_blank">Repo 1</a>
<a class="repo" href="#" target="_blank">Repo 2</a>
<a class="repo" href="#" target="_blank">Repo 3</a>
 */}