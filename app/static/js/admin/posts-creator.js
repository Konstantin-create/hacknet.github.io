let active_window = 'new' // First screen
let numOfPosts = document.getElementsByClassName('post').length;
let form_screens = ['form-screen1', 'form-screen2']
let form_screen = 0

document.getElementById('img-3').className = 'aside-img active-page'
document.getElementById('header-nav-1').className = 'header-nav-item active'
document.getElementById('old-posts').className = 'old-posts hide-item'
document.getElementsByTagName('main')[0].style.height = (numOfPosts * 500 + 250).toString() + 'px'
document.getElementsByTagName('aside')[0].style.height = (numOfPosts * 500 + 250).toString() + 'px'

for (let i = 1; i <= form_screens.length; i++) {
    document.getElementById(form_screens[i]).className = form_screens[i] + ' hidden'
}

function change_active() {
    if (active_window == 'old') {
        active_window = 'new'
        document.getElementById('header-nav-1').className = 'header-nav-item'
        document.getElementById('header-nav-2').className = 'header-nav-item active'
        document.getElementById('old-posts').className = 'old-posts hide-item'
        document.getElementById('new-posts').className = 'new-posts'
    } else {
        active_window = 'old'
        document.getElementById('header-nav-1').className = 'header-nav-item active'
        document.getElementById('header-nav-2').className = 'header-nav-item'
        document.getElementById('old-posts').className = 'old-posts'
        document.getElementById('new-posts').className = 'new-posts hide-item'
    }
}


function next_form_screen() {
    if (document.getElementsByName('post-header')[0].value !== '') {
        form_screen += 1
        document.getElementById(form_screens[form_screen - 1]).className = form_screens[form_screen - 1] + ' hidden'
        document.getElementById(form_screens[form_screen]).className = form_screens[form_screen]
    }
}