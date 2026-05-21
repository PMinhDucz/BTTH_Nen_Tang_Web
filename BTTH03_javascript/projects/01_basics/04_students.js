const students = [{id:1, name:'Duc', score:9}, {id:2, name:'Lan', score:8}];

function render() { console.log(students); }

function addStudent(name, score) { students.push({id: Date.now(), name, score}); }

function delStudent(id) { const idx = students.findIndex(s => s.id === id); students.splice(idx, 1); }
