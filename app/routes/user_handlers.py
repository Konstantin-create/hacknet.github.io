from app import db
from app import app, redirect, request
from app.modules import posts_tools
from app.modules.models import Posts


@app.route('/user/add-post-like/<int:post_id>')
def user_add_like(post_id: int):
    posts_tools.add_like(post_id, request.remote_addr)
    return redirect(f'/posts/{post_id}')


@app.route('/user/add-post-dislike/<int:post_id>')
def user_add_dislike(post_id: int):
    posts_tools.add_dislike(post_id, request.remote_addr)
    return redirect(f'/posts/{post_id}')
