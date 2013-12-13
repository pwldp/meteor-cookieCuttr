if (Meteor.isClient) {
  Meteor.startup(function () {
	  if (Meteor.settings && Meteor.settings.public !== undefined && Meteor.settings.public.cookieCuttr !== undefined){
	    $.cookieCuttr( Meteor.settings.public.cookieCuttr );
	  } else {
	    console.log("You can customize cookieCuttr by adding public.cookieCuttr in settings file.");
	    $.cookieCuttr();
	  };
  });
}
