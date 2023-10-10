// header
const container = document.createElement("div");
const header = document.getElementById("header-id");
container.classList.add("container");
const body = document.getElementById("body-id");
header.appendChild(container);

const profile = document.createElement("div");
profile.classList.add("profile");
container.appendChild(profile);

const profileImage = document.createElement("div");
profileImage.classList.add("profile-image");
profile.appendChild(profileImage);

const imageInProfile = document.createElement("img");
imageInProfile.src =
  "https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces";
profileImage.appendChild(imageInProfile);

const profileUserSettings = document.createElement("div");
profileUserSettings.classList.add("profile-user-settings");
profile.appendChild(profileUserSettings);

const h1 = document.createElement("h1");
h1.innerText = "janedoe_";
h1.classList.add("profile-user-name");
profileUserSettings.appendChild(h1);

const buttonEditProfile = document.createElement("button");
buttonEditProfile.innerText = "Edit Profile";
buttonEditProfile.classList.add("btn", "profile-edit-btn");
profileUserSettings.appendChild(buttonEditProfile);

const buttonProfileSettings = document.createElement("button");
buttonProfileSettings.classList.add("btn", "profile-settings-btn");
buttonProfileSettings.setAttribute("aria-label", "profile settings");
profileUserSettings.appendChild(buttonProfileSettings);

const profileStats = document.createElement("div");
profileStats.classList.add("profile-stats");
profile.appendChild(profileStats);

const ulInProfileStats = document.createElement("ul");
profileStats.appendChild(ulInProfileStats);

const posts = document.createElement("li");
posts.innerText = "posts";
ulInProfileStats.appendChild(posts);

const spanPosts = document.createElement("span");
spanPosts.innerText = "164";
spanPosts.classList.add("profile-stat-count");
posts.appendChild(spanPosts);

const followers = document.createElement("li");
followers.innerText = "followers";
ulInProfileStats.appendChild(followers);

const spanFollowers = document.createElement("span");
spanFollowers.innerText = "188";
spanFollowers.classList.add("profile-stat-count");
followers.appendChild(spanFollowers);

const following = document.createElement("li");
following.innerText = "following";
ulInProfileStats.appendChild(following);

const spanFollowing = document.createElement("span");
spanFollowing.innerText = "206";
spanFollowing.classList.add("profile-stat-count");
following.appendChild(spanFollowing);

const profileBio = document.createElement("div");
profileBio.classList.add("profile-bio");
profile.appendChild(profileBio);

const pProfileBio = document.createElement("p");
pProfileBio.innerText =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️";
profileBio.appendChild(pProfileBio);

const spanProfileBio = document.createElement("span");
spanProfileBio.innerText = "Jane Doe";
spanProfileBio.classList.add("profile-real-name");
pProfileBio.appendChild(spanProfileBio);

// main
const main = document.createElement("main");
body.appendChild(main);

const containerMain = document.createElement("div");
containerMain.classList.add("container");
main.appendChild(containerMain);

const gallery = document.createElement("div");
gallery.classList.add("gallery");
containerMain.appendChild(gallery);

// 1 img

const galleryItem = document.createElement("div");
galleryItem.classList.add("gallery-item");
gallery.appendChild(galleryItem);

const imgGalleryItem = document.createElement("img");
imgGalleryItem.src =
  "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop";
imgGalleryItem.classList.add("gallery-image");
galleryItem.appendChild(imgGalleryItem);

const galleryItemInfo = document.createElement("div");
galleryItemInfo.classList.add("gallery-item-info");
galleryItem.appendChild(galleryItemInfo);

const ulGalleryItemInfo = document.createElement("ul");
galleryItemInfo.appendChild(ulGalleryItemInfo);
const likes = document.createElement("li");
likes.innerText = "56";
likes.classList.add("gallery-item-likes");
ulGalleryItemInfo.appendChild(likes);
const spanLikes = document.createElement("span");
spanLikes.innerText = "Likes:";
spanLikes.classList.add("visually-hidden");
likes.appendChild(spanLikes);

const comments = document.createElement("li");
comments.innerText = "2";
comments.classList.add("gallery-item-comments");
ulGalleryItemInfo.appendChild(comments);
const spanComments = document.createElement("span");
spanComments.innerText = "Comments:";
spanComments.classList.add("visually-hidden");
comments.appendChild(spanComments);

//2 img

const galleryItem2 = document.createElement("div");
galleryItem2.classList.add("gallery-item");
gallery.appendChild(galleryItem2);

const imgGalleryItem2 = document.createElement("img");
imgGalleryItem2.src =
  "https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop";
imgGalleryItem2.classList.add("gallery-image");
galleryItem2.appendChild(imgGalleryItem2);

const galleryItemInfo2 = document.createElement("div");
galleryItemInfo2.classList.add("gallery-item-info");
imgGalleryItem2.appendChild(galleryItemInfo2);

const ulGalleryItemInfo2 = document.createElement("ul");
galleryItemInfo2.appendChild(ulGalleryItemInfo2);

const likes2 = document.createElement("li");
likes2.innerText = "89";
likes2.classList.add("gallery-item-likes");
ulGalleryItemInfo2.appendChild(likes2);
const spanLikes2 = document.createElement("span");
spanLikes2.innerText = "Likes:";
spanLikes2.classList.add("visually-hidden");
likes2.appendChild(spanLikes2);

const comments2 = document.createElement("li");
comments2.innerText = "5";
comments2.classList.add("gallery-item-comments");
ulGalleryItemInfo2.appendChild(comments2);
const spanComments2 = document.createElement("span");
spanComments2.innerText = "Comments:";
spanComments2.classList.add("visually-hidden");
comments2.appendChild(spanComments2);

//3 img

const galleryItem3 = document.createElement("div");
galleryItem3.classList.add("gallery-item");
gallery.appendChild(galleryItem3);

const imgGalleryItem3 = document.createElement("img");
imgGalleryItem3.src =
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop";
imgGalleryItem3.classList.add("gallery-image");
galleryItem3.appendChild(imgGalleryItem3);

const galleryItemType = document.createElement("div");
galleryItemType.classList.add("gallery-item-type");
galleryItem3.appendChild(galleryItemType);
const spanInGalleryType = document.createElement("span");
spanInGalleryType.innerText = "Gallery";
spanInGalleryType.classList.add("visually-hidden");
galleryItemType.appendChild(spanInGalleryType);

const galleryItemInfo3 = document.createElement("div");
galleryItemInfo3.classList.add("gallery-item-info");
galleryItem3.appendChild(galleryItemInfo3);

const ulGalleryItemInfo3 = document.createElement("ul");
galleryItemInfo3.appendChild(ulGalleryItemInfo3);

const likes3 = document.createElement("li");
likes3.innerText = "42";
likes3.classList.add("gallery-item-likes");
ulGalleryItemInfo3.appendChild(likes3);

const spanLikes3 = document.createElement("span");
spanLikes3.innerText = "Likes:";
spanLikes3.classList.add("visually-hidden");
likes3.appendChild(spanLikes3);

const comments3 = document.createElement("li");
comments3.innerText = "1";
comments3.classList.add("gallery-item-comments");
ulGalleryItemInfo3.appendChild(comments3);

const spanComments3 = document.createElement("span");
spanComments3.innerText = "Comments:";
spanComments3.classList.add("visually-hidden");
comments3.appendChild(spanComments3);

//4 img

const galleryItem4 = document.createElement("div");
galleryItem4.classList.add("gallery-item");
gallery.appendChild(galleryItem4);

const imgGalleryItem4 = document.createElement("img");
imgGalleryItem4.src =
  "https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop";
imgGalleryItem4.classList.add("gallery-image");
galleryItem4.appendChild(imgGalleryItem4);

const galleryItemType2 = document.createElement("div");
galleryItemType2.classList.add("gallery-item-type");
galleryItem4.appendChild(galleryItemType2);

const spanInGalleryType2 = document.createElement("span");
spanInGalleryType2.innerText = "Video";
spanInGalleryType2.classList.add("visually-hidden");
galleryItemType2.appendChild(spanInGalleryType2);

const galleryItemInfo4 = document.createElement("div");
galleryItemInfo4.classList.add("gallery-item-info");
galleryItem4.appendChild(galleryItemInfo4);

const ulGalleryItemInfo4 = document.createElement("ul");
galleryItemInfo4.appendChild(ulGalleryItemInfo4);

const likes4 = document.createElement("li");
likes4.innerText = "38";
likes4.classList.add("gallery-item-likes");
ulGalleryItemInfo4.appendChild(likes4);

const spanLikes4 = document.createElement("span");
spanLikes4.innerText = "Likes:";
spanLikes4.classList.add("visually-hidden");
ulGalleryItemInfo4.appendChild(spanLikes4);

const comments4 = document.createElement("li");
comments4.innerText = "0";
comments4.classList.add("gallery-item-comments");
ulGalleryItemInfo4.appendChild(comments4);

const spanComments4 = document.createElement("span");
spanComments4.innerText = "Comments:";
spanComments4.classList.add("visually-hidden");
comments4.appendChild(spanComments4);

// 5 img

const galleryItem5 = document.createElement("div");
galleryItem5.classList.add("gallery-item");
gallery.appendChild(galleryItem5);

const imgGalleryItem5 = document.createElement("img");
imgGalleryItem5.src =
  "https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop";
imgGalleryItem5.classList.add("gallery-image");
galleryItem5.appendChild(imgGalleryItem5);

const galleryItemType3 = document.createElement("div");
galleryItemType3.classList.add("gallery-item-type");
galleryItem5.appendChild(galleryItemType3);

const spanInGalleryType3 = document.createElement("span");
spanInGalleryType3.innerText = "Gallery";
spanInGalleryType3.classList.add("visually-hidden");
galleryItemType3.appendChild(spanInGalleryType3);

const galleryItemInfo5 = document.createElement("div");
galleryItemInfo5.classList.add("gallery-item-info");
galleryItem5.appendChild(galleryItemInfo5);

const ulGalleryItemInfo5 = document.createElement("ul");
galleryItemInfo5.appendChild(ulGalleryItemInfo5);

const likes5 = document.createElement("li");
likes5.innerText = "47";
likes5.classList.add("gallery-item-likes");
ulGalleryItemInfo5.appendChild(likes5);

const spanLikes5 = document.createElement("span");
spanLikes5.innerText = "Likes:";
likes5.appendChild(spanLikes5);

const comments5 = document.createElement("li");
comments5.innerText = "1";
comments5.classList.add("gallery-item-comments");
ulGalleryItemInfo5.appendChild(comments5);

const spanComments5 = document.createElement("span");
spanComments5.innerText = "Comments:";
spanComments5.classList.add("visually-hidden");
comments5.appendChild(spanComments5);

//6 img

const galleryItem6 = document.createElement("div");
galleryItem6.classList.add("gallery-item");
gallery.appendChild(galleryItem6);

const imgGalleryItem6 = document.createElement("img");
imgGalleryItem6.src =
  "https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop";
imgGalleryItem6.classList.add("gallery-image");
galleryItem6.appendChild(imgGalleryItem6);

const galleryItemInfo6 = document.createElement("div");
galleryItemInfo6.classList.add("gallery-item-info");
galleryItem6.appendChild(galleryItemInfo6);

const ulGalleryItemInfo6 = document.createElement("ul");
galleryItemInfo6.appendChild(ulGalleryItemInfo6);

const likes6 = document.createElement("li");
likes6.innerText = "94";
likes6.classList.add("gallery-item-likes");
ulGalleryItemInfo6.appendChild(likes6);

const spanLikes6 = document.createElement("span");
spanLikes6.innerText = "Likes:";
spanLikes6.classList.add("visually-hidden");
likes6.appendChild(spanLikes6);

const comments6 = document.createElement("li");
comments6.innerText = "3";
comments6.classList.add("gallery-item-comments");
ulGalleryItemInfo6.appendChild(comments6);

const spanComments6 = document.createElement("span");
spanComments6.innerText = "Comments:";
spanComments6.classList.add("visually-hidden");
comments6.appendChild(spanComments6);

//7 img

const galleryItem7 = document.createElement("div");
galleryItem7.classList.add("gallery-item");
gallery.appendChild(galleryItem7);

const imgGalleryItem7 = document.createElement("img");
imgGalleryItem7.src =
  "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop";
imgGalleryItem7.classList.add("gallery-image");
galleryItem7.appendChild(imgGalleryItem7);

const galleryItemType7 = document.createElement("div");
galleryItemType7.classList.add("gallery-item-type");
galleryItem7.appendChild(galleryItemType7);

const spanInGalleryType4 = document.createElement("span");
spanInGalleryType4.innerText = "Gallery";
spanInGalleryType4.classList.add("visually-hidden");
galleryItemType7.appendChild(spanInGalleryType4);

const galleryItemInfo7 = document.createElement("div");
galleryItemInfo7.classList.add("gallery-item-info");
galleryItem7.appendChild(galleryItemInfo7);

const ulGalleryItemInfo7 = document.createElement("ul");
galleryItemInfo7.appendChild(ulGalleryItemInfo7);

const likes7 = document.createElement("li");
likes7.innerText = "52";
likes7.classList.add("gallery-item-likes");
ulGalleryItemInfo7.appendChild(likes7);

const spanLikes7 = document.createElement("span");
spanLikes7.innerText = "Likes:";
spanLikes7.classList.add("visually-hidden");
likes7.appendChild(spanLikes7);

const comments7 = document.createElement("li");
comments7.innerText = "4";
comments7.classList.add("gallery-item-comments");
ulGalleryItemInfo7.appendChild(comments7);

const spanComments7 = document.createElement("span");
spanComments7.innerText = "Comments:";
spanComments7.classList.add("visually-hidden");
comments7.appendChild(spanComments7);

//8 img

const galleryItem8 = document.createElement("div");
galleryItem8.classList.add("gallery-item");
gallery.appendChild(galleryItem8);

const imgGalleryItem8 = document.createElement("img");
imgGalleryItem8.src =
  "https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop";
imgGalleryItem8.classList.add("gallery-image");
galleryItem8.appendChild(imgGalleryItem8);

const galleryItemInfo8 = document.createElement("div");
galleryItemInfo8.classList.add("gallery-item-info");
galleryItem8.appendChild(galleryItemInfo8);

const ulGalleryItemInfo8 = document.createElement("ul");
galleryItemInfo8.appendChild(ulGalleryItemInfo8);

const likes8 = document.createElement("li");
likes8.innerText = "66";
likes8.classList.add("gallery-item-likes");
ulGalleryItemInfo8.appendChild(likes8);

const spanLikes8 = document.createElement("span");
spanLikes8.innerText = "Likes:";
spanLikes8.classList.add("visually-hidden");
likes8.appendChild(spanLikes8);

const comments8 = document.createElement("li");
comments8.innerText = "2";
comments8.classList.add("gallery-item-comments");
ulGalleryItemInfo8.appendChild(comments8);

const spanComments8 = document.createElement("span");
spanComments8.innerText = "Comments:";
spanComments8.classList.add("visually-hidden");
comments8.appendChild(spanComments8);

//9 img

const galleryItem9 = document.createElement("div");
galleryItem9.classList.add("gallery-item");
gallery.appendChild(galleryItem9);

const imgGalleryItem9 = document.createElement("img");
imgGalleryItem9.src =
  "https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop";
imgGalleryItem9.classList.add("gallery-image");
galleryItem9.appendChild(imgGalleryItem9);

const galleryItemType9 = document.createElement("div");
galleryItemType9.classList.add("gallery-item-type");
galleryItem9.appendChild(galleryItemType9);

const spanInGalleryType9 = document.createElement("span");
spanInGalleryType9.innerText = "Gallery";
galleryItemType9.appendChild(spanInGalleryType9);

const galleryItemInfo9 = document.createElement("div");
galleryItemInfo9.classList.add("gallery-item-info");
galleryItem9.appendChild(galleryItemInfo9);

const ulGalleryItemInfo9 = document.createElement("ul");
galleryItemInfo9.appendChild(ulGalleryItemInfo9);

const likes9 = document.createElement("li");
likes9.innerText = "45";
likes9.classList.add("gallery-item-likes");
ulGalleryItemInfo9.appendChild(likes9);

const spanLikes9 = document.createElement("span");
spanLikes9.innerText = "Likes:";
spanLikes9.classList.add("visually-hidden");
likes9.appendChild(spanLikes9);

const comments9 = document.createElement("li");
comments9.innerText = "0";
comments9.classList.add("gallery-item-comments");
ulGalleryItemInfo9.appendChild(comments9);

const spanComments9 = document.createElement("span");
spanComments9.innerText = "Comments:";
spanComments9.classList.add("visually-hidden");
comments9.appendChild(spanComments9);

//10 img

const galleryItem10 = document.createElement("div");
galleryItem10.classList.add("gallery-item");
gallery.appendChild(galleryItem10);

const imgGalleryItem10 = document.createElement("img");
imgGalleryItem10.src =
  "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop";
imgGalleryItem10.classList.add("gallery-image");
galleryItem10.appendChild(imgGalleryItem10);

const galleryItemInfo10 = document.createElement("div");
imgGalleryItem10.classList.add("gallery-item-info");
galleryItem10.appendChild(galleryItemInfo10);

const ulGalleryItemInfo10 = document.createElement("ul");
galleryItemInfo10.appendChild(ulGalleryItemInfo10);

const likes10 = document.createElement("li");
likes10.innerText = "34";
likes10.classList.add("gallery-item-likes");
ulGalleryItemInfo10.appendChild(likes10);

const spanLikes10 = document.createElement("span");
spanLikes10.innerText = "Likes";
spanLikes10.classList.add("visually-hidden");
likes10.appendChild(spanLikes10);

const comments10 = document.createElement("li");
comments10.innerText = "1";
comments10.classList.add("gallery-item-comments");
ulGalleryItemInfo10.appendChild(comments10);

const spanComments10 = document.createElement("span");
spanComments10.innerText = "Comments:";
spanComments10.classList.add("visually-hidden");
comments10.appendChild(spanComments10);

//11 img

const galleryItem11 = document.createElement("div");
galleryItem11.classList.add("gallery-item");
gallery.appendChild(galleryItem11);

const imgGalleryItem11 = document.createElement("img");
imgGalleryItem11.src =
  "https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop";
imgGalleryItem11.classList.add("gallery-image");
galleryItem11.appendChild(imgGalleryItem11);

const galleryItemInfo11 = document.createElement("div");
galleryItemInfo11.classList.add("gallery-item-info");
galleryItem11.appendChild(galleryItemInfo11);

const ulGalleryItemInfo11 = document.createElement("ul");
galleryItemInfo11.appendChild(ulGalleryItemInfo11);

const likes11 = document.createElement("li");
likes11.innerText = "41";
likes11.classList.add("gallery-item-likes");
ulGalleryItemInfo11.appendChild(likes11);

const spanLikes11 = document.createElement("span");
spanLikes11.innerText = "Likes";
spanLikes11.classList.add("visually-hidden");
likes11.appendChild(spanLikes11);

const comments11 = document.createElement("li");
comments11.innerText = "0";
comments11.classList.add("gallery-item-comments");
galleryItemInfo11.appendChild(comments11);

const spanComments11 = document.createElement("span");
spanComments11.innerText = "Comments:";
spanComments11.classList.add("visually-hidden");
comments11.appendChild(spanComments11);

//12 img

const galleryItem12 = document.createElement("div");
galleryItem12.classList.add("gallery-item");
gallery.appendChild(galleryItem12);

const imgGalleryItem12 = document.createElement("img");
imgGalleryItem12.src =
  "https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop";
imgGalleryItem12.classList.add("gallery-image");
galleryItem12.appendChild(imgGalleryItem12);

const galleryItemType12 = document.createElement("div");
galleryItemType12.classList.add("gallery-item-type");
galleryItem12.appendChild(galleryItemType12);

const spanInGalleryType12 = document.createElement("span");
spanInGalleryType12.innerText = "Video";
spanInGalleryType12.classList.add("visually-hidden");
galleryItemType12.appendChild(spanInGalleryType12);

const galleryItemInfo12 = document.createElement("div");
galleryItemInfo12.classList.add("gallery-item-info");
galleryItem12.appendChild(galleryItemInfo12);

const ulGalleryItemInfo12 = document.createElement("ul");
galleryItemInfo12.appendChild(ulGalleryItemInfo12);

const likes12 = document.createElement("li");
likes12.innerText = "30";
likes12.classList.add("gallery-item-likes");
ulGalleryItemInfo12.appendChild(likes12);

const spanLikes12 = document.createElement("span");
spanLikes12.innerText = "Likes";
spanLikes12.classList.add("visually-hidden");
likes12.appendChild(spanLikes12);

const comments12 = document.createElement("li");
comments12.innerText = "2";
comments12.classList.add("gallery-item-comments");
ulGalleryItemInfo12.appendChild(comments12);

const spanComments12 = document.createElement("span");
spanComments12.innerText = "Comments:";
spanComments12.classList.add("visually-hidden");
comments12.appendChild(spanComments12);
