export const addNominee = (nominees, nomineeToAdd) => {
    const nomineeExists = nominees.find(nominee => nominee.imdbID === nomineeToAdd.imdbID);

    if(!nomineeExists) {
        return [...nominees, nomineeToAdd]
    }
    else return nominees; 
}

export const removeNominee = (nominees, nomineeToRemove) => {
    const nomineeExists = nominees.find(nominee => nominee.imdbID === nomineeToRemove.imdbID);

    if(nomineeExists) {
        return nominees.filter(nominee => nominee.imdbID !== nomineeToRemove.imdbID)
    }
    else return nominees; 
}