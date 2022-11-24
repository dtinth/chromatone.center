export const controls = reactive({
	channel: 1,
	tempoCC: 8,
	cc: [
		{
			over: 1,
			under: 2,
			steps: 3,
			rotate: 4,
			sound: 5,
			pan: 6,
			vol: 7,
		},
		{
			over: 9,
			under: 10,
			steps: 11,
			rotate: 12,
			sound: 13,
			pan: 14,
			vol: 15,
		},
	],
	params: {
		over: 'Number of steps',
		under: 'Subdivision',
		steps: 'Number of active steps',
		rotate: 'Rotation of the pattern',
		sound: 'Beat sound kit',
		pan: 'Panning',
		vol: 'Volume',
		bpm: 'BPM'
	}
})
