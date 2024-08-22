import * as THREE from 'three';

// Parameters for the circle
const radius = 10; // radius of the circle
const segments = 64; // number of segments in the circle

// Construct the circular path
const points = [];
for (let i = 0; i <= segments; i++) {
	const angle = (i / segments) * Math.PI * 2; // full circle in radians
	const x = Math.cos(angle) * radius;
	const z = Math.sin(angle) * radius;
	const y = 0; // Keep the circle in the XZ plane
	points.push(new THREE.Vector3(x, y, z));
}

const spline = new THREE.CatmullRomCurve3(points, true); // 'true' to close the loop

export default spline;
