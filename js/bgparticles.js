"use strict";
tsParticles.load("tsparticles", {
	// detectRetina: true,
	fpsLimit: 60,
	interactivity: {
		detectsOn: "canvas",
		events: {
			onHover: {
				enable: true,
				mode: "bubble",
				parallax: {
					enable: true,
					force: 80,
					smooth: 10,
				},
			},
			resize: true,
		},
		modes: {
			bubble: {
				distance: 300,
				duration: 2,
				opacity: 0.5,
				size: 30,
				speed: 5,
			},
		},
	},
	particles: {
		color: {
			value: "#ffffff",
		},
		rotate: {
			value: 0,
			random: true,
			direction: "clockwise",
			animation: {
				enable: true,
				speed: 3,
				sync: false,
			},
		},
		move: {
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200,
			},
			bounce: false,
			direction: "none",
			enable: false,
			outMode: "bounce",
			random: false,
			speed: 0.2,
			straight: false,
		},
		number: {
			density: {
				enable: true,
				area: 800,
			},
			limit: 0,
			value: 40,
		},
		opacity: {
			animation: {
				enable: true,
				minimumValue: 0.1,
				speed: 1,
				sync: false,
			},
			random: true,
			value: 0.4,
		},
		shape: {
			image: [
				{
					src: "../images/biology-icon/biology-01.png",
					width: 80,
					height: 80,
				},
				{
					src: "../images/biology-icon/biology-02.png",
					width: 80,
					height: 80,
				},
				{
					src: "../images/biology-icon/biology-03.png",
					width: 80,
					height: 80,
				},
				{
					src: "../images/biology-icon/biology-04.png",
					width: 80,
					height: 80,
				},
				{
					src: "../images/biology-icon/biology-05.png",
					width: 80,
					height: 80,
				},
				{
					src: "../images/biology-icon/biology-06.png",
					width: 80,
					height: 80,
				},
				{
					src: "../images/biology-icon/biology-07.png",
					width: 80,
					height: 80,
				},
				{
					src: "../images/biology-icon/biology-08.png",
					width: 80,
					height: 80,
				},
				{
					src: "../images/biology-icon/biology-09.png",
					width: 80,
					height: 80,
				},
				{
					src: "../images/biology-icon/biology-10.png",
					width: 80,
					height: 80,
				},
				{
					src: "../images/biology-icon/biology-11.png",
					width: 80,
					height: 80,
				},
				{
					src: "../images/biology-icon/biology-12.png",
					width: 80,
					height: 80,
				},
				{
					src: "../images/biology-icon/biology-13.png",
					width: 80,
					height: 80,
				},
				{
					src: "../images/biology-icon/biology-14.png",
					width: 80,
					height: 80,
				},
				{
					src: "../images/biology-icon/biology-15.png",
					width: 80,
					height: 80,
				},
				{
					src: "../images/biology-icon/biology-16.png",
					width: 80,
					height: 80,
				},
				{
					src: "../images/biology-icon/biology-17.png",
					width: 80,
					height: 80,
				},
			],
			type: "image",
		},
		size: {
			animation: {
				enable: true,
				minimumValue: 0.5,
				speed: 20,
				sync: false,
			},
			random: true,
			value: 20,
		},
	},
});
