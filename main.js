'use strict';

//메뉴토글버튼
const toggleBtn = document.querySelector("#nav_Btn")
const menu = document.querySelector("#nav_menu")

toggleBtn.addEventListener("click",()=>{
    menu.classList.toggle("on");
})

document.addEventListener('scroll',()=>{
    setTimeout(()=>{
        menu.classList.remove('on');
    },100)
})




//상단버튼
const topBtn = document.querySelector('#topBtn');
window.addEventListener('scroll',()=>{
    if(this.scrollY > window.innerHeight/2){
        topBtn.classList.add("on");
    }else{
        topBtn.classList.remove("on");
    }
})

//메뉴 클릭시 스크롤
const nav_menu = document.querySelector('#nav_menu');
nav_menu.addEventListener('click',(e)=>{
    const target = e.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    console.log(e.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior:'smooth'});
})

//프로젝트 필터버튼
const categoryBtn = document.querySelector('#categories');
const projectContainer = document.querySelector('#work_project');
const projects = document.querySelectorAll('.project');


categoryBtn.addEventListener('click',(e)=>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null){
        return
    }
    console.log(filter);

    //프로젝트 필터버튼 액티브
    const active = document.querySelector('.category_btn.selected')
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    e.target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    setTimeout(()=>{
        projects.forEach((project)=>{
            if(filter === '*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            }else{
                project.classList.add('invisible')
            }
        });
        projectContainer.classList.remove('anim-out')
    },300)
})

//이메일 주소 복사
function copyToClickBoard(){
    const email = document.getElementById("email").textContent;
    const textArea = document.createElement('textarea');
    document.body.appendChild(textArea);
    textArea.value = email

    navigator.clipboard.writeText(textArea.value)
        .then(() => {
            Swal.fire(
                'Copy!',
                'You can send me email!',
                'success'
              )
        })
        .catch(() => {
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
            })
        })
    
    document.body.removeChild(textArea);
}


//sec1 버튼이동
function toProject() {
    const scrollTo = document.querySelector('#section4');
    scrollTo.scrollIntoView({behavior:'smooth'});
}






