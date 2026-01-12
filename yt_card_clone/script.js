function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let title1 = document.getElementsByClassName("title");
    title1[0].innerText = title;

    let channelName = document.getElementsByClassName("cName");
    channelName[0].innerText = cName;

    let views1 = document.getElementsByClassName("views");
    if(views > 1000 && views < 1000000){
        views = (views / 1000) + 'K';
    }
    else if(views > 1000000){
        views = (views / 1000000) + 'M';
    }
    views1[0].innerText = `${views} views`;

    let month = document.getElementsByClassName("monthsOld")
    month[0].innerText = `${monthsOld} months ago`;

    let thumbnailImg = document.getElementsByClassName("thumbnail");
    thumbnailImg[0].children[0].src = thumbnail;

    let timeDuration = document.getElementsByClassName("timeDuration");
    timeDuration[0].innerText = duration;
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 9, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")