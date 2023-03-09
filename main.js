let divPosts = document.querySelector("#posts");
let imgPath = './images.png';
 let  getPosts = async function(url){
     await axios.get(url)
      .then(async (response)=> {
           let posts = await response.data.data;
           console.log(posts)
           for (let post of posts) {
            let imgprofile = post.author.profile_image==null?imgPath:post.author.profile_image;
               divPosts.innerHTML += `
                    <div class="card mb-4 shadow" id="${post.id}">
                    <div class="card-header">
                        <div id="${post.author.id}" class="rounded-circle me-2 d-flex justify-content-start align-items-center" style="width:50px;"> 
                            <img  src="${imgprofile}" alt="user" style="width:50px; " class="rounded-circle border border-3">
                            <span class="ms-2  fs-5 fw-bold">${post.author.username}</span> 
                        </div> 
                    </div>
                    <div class="card-body">
                        <img src="${post.image==''?imgPath:post.image}" alt="" class="w-100 rounded-top">
                        <span class="fs-6 text-secondary data">${post.created_at}</span>
                        <h5 class="post-title mb-1"> ${post.title!==null?post.title:""}</h5>
                        <p class="card-text">${post.body}</p>
                        <hr class="text-secondary"> 
                        <span class="comments"> <i class="bi bi-pen"></i> (${post.comments_count})comments</span>
                     </div>
                    </div>
               ` 
          }
        })
        .catch( (error)=> {
           alert(error);
  })
}

let postsUrl = "https://tarmeezacademy.com/api/v1/posts";
 getPosts(postsUrl);

