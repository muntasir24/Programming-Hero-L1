export const handleAdd = (myapp,setApps) => {
    let stored = JSON.parse(localStorage.getItem('installed'));
    let arr=[];
    if (stored) {
      const exists = stored.some(it => it.id === myapp.id);
      if (exists) {
        alert("already have");
        return;
      }
      arr = [...stored, myapp];
    }
  else arr.push(myapp);
  setApps(arr);
    
    localStorage.setItem('installed', JSON.stringify(arr));
}


export const getInstalledApps = () => {
    try {
        const stored = JSON.parse(localStorage.getItem('installed'));
        return stored;
    }
    catch {
        return [];
    }
}