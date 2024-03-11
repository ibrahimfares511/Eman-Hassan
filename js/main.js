"use strict";
tsParticles.load("tsparticles", {
	// detectRetina: true,
	fpsLimit: 60,
	interactivity: {
		detectsOn: "canvas",
		events: {
			onClick: {
				enable: true,
				mode: "push",
			},
			onHover: {
				enable: true,
				mode: "bubble",
				parallax: {
					enable: true,
					force: 50,
					smooth: 20,
				},
			},
			resize: true,
		},
		modes: {
			bubble: {
				distance: 100,
				duration: 2,
				opacity: 0.6,
				size: 40,
				speed: 5,
			},
			push: {
				quantity: 5,
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
				enable: true,
				rotateX: 600,
				rotateY: 1200,
			},
			bounce: true,
			direction: "none",
			enable: true,
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
			value: 100,
		},
		opacity: {
			animation: {
				enable: true,
				minimumValue: 0.3,
				speed: 1,
				sync: false,
			},
			random: true,
			value: 0.5,
		},
		shape: {
			image: [
				{
					src: "../images/biology-01.png",
					width: 32,
					height: 32,
				},
				{
					src: "../images/biology-02.png",
					width: 32,
					height: 32,
				},
				{
					src: "../images/biology-03.png",
					width: 32,
					height: 32,
				},
				{
					src: "../images/biology-04.png",
					width: 32,
					height: 32,
				},
				{
					src: "../images/biology-05.png",
					width: 32,
					height: 32,
				},
				{
					src: "../images/biology-06.png",
					width: 32,
					height: 32,
				},
				{
					src: "../images/biology-07.png",
					width: 32,
					height: 32,
				},
				{
					src: "../images/biology-08.png",
					width: 32,
					height: 32,
				},
				{
					src: "../images/biology-09.png",
					width: 32,
					height: 32,
				},
				{
					src: "../images/biology-10.png",
					width: 32,
					height: 32,
				},
				{
					src: "../images/biology-11.png",
					width: 32,
					height: 32,
				},
				{
					src: "../images/biology-12.png",
					width: 32,
					height: 32,
				},
				{
					src: "../images/biology-13.png",
					width: 32,
					height: 32,
				},
				{
					src: "../images/biology-14.png",
					width: 32,
					height: 32,
				},
				{
					src: "../images/biology-15.png",
					width: 32,
					height: 32,
				},
				{
					src: "../images/biology-16.png",
					width: 32,
					height: 32,
				},
				{
					src: "../images/biology-17.png",
					width: 32,
					height: 32,
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
