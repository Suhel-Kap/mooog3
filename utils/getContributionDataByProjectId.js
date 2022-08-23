const getContributionDataByProjectId = async (id) => {

    const apiReq = await fetch("https://moog3.herokuapp.com/api/fetchContributionByProjId", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            data: id,
        }),
    })
    return await apiReq.json()
}

export default getContributionDataByProjectId
