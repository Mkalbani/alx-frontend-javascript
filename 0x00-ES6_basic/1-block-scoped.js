export default function taskBlock(trueOrFalse) {
	const task = false;
  	const task2 = true;

	if (trueOrFalse) {
// consr added for task
		const task = true;
// const added for task2
		const task2 = false;
		if (task && task2) {
			return [task, task2];
    }
  }

  return [task, task2];
}
