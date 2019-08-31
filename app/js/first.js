$(function() {

    instagramSubs()
    instagramLike()
});

// api
    
function instagramSubs() {
    var apiKey = '11336982573.def2730.199ec5a7f5c74cf69cad840d8e352db2'
    var server = `https://api.instagram.com/v1/users/self/?access_token=${apiKey}`;
    var subscribe = document.querySelector('.instagram-sub')
    var like = document.querySelector('.instagram-like')
    fetch(server)
        .then(function (value) {
            if (value.status !== 200) {
                return Promise.reject(new Error(value.status));
            }
            return value.json();
        })
        .then(function (output) {
            subscribe.innerText = output.data.counts.followed_by
        })
        .catch(function (reason) {
            console.log('error: ' + reason);
        });
}
function instagramLike() {
    var apiKey = '11336982573.def2730.199ec5a7f5c74cf69cad840d8e352db2'
    var server = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${apiKey}`;
    var like = document.querySelector('.instagram-like')
    fetch(server)
        .then(function (value) {
            if (value.status !== 200) {
                return Promise.reject(new Error(value.status));
            }
            return value.json();
        })
        .then(function (output) {
            var likecount = 0
            output.data.forEach(element => {
                likecount = likecount + element.likes.count
            });
            like.innerText = likecount2
        })
        .catch(function (reason) {
            console.log('error: ' + reason);
        });
}