/**
 * 
 * @returns Ramdom ID
 */
function uid() {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substr(2);

    let union = head + tail;
    return union
};

export default uid;