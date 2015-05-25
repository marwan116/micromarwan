Meteor.subscribe('posts');

Template.postList.helpers({
	 posts : function(){
	 	return Posts.find();
	 }
});