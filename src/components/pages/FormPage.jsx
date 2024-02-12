import Create from "../Create"
function FormPage( changeData,
    data,
    updateAvatarAuthor,
    updateAvatarProject,
    onSubmit,
    fetchResponse) {
    return (
        <div>
            <Create
          changeData={changeData}
          data={data}
          updateAvatarAuthor={updateAvatarAuthor}
          updateAvatarProject={updateAvatarProject}
          onSubmit={onSubmit}
          fetchResponse={fetchResponse}
        />
            <h1>Form Page</h1>
        </div>
    )
}

export default FormPage;