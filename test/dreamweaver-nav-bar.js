// JavaScript Document

jQuery(document).ready(function()
{
	"use strict";
	jQuery('.toggle-nav').click(function(e)
	{
		jQuery(this).toggleClass('active');
		jQuery('.test-nav ul').toggleClass('active');
		
		/*if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
		{
			if ($(this).hasClass(‘active’))
			{		
				$(“#menu_spacer”).css(“height”,$(“nav.menu”).css(“height”));
			}
			else
			{
				$(“#menu_spacer”).css(“height”,0);
			}
  		}*/
				  
		e.preventDefault();
	});
});