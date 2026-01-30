export default function UserProfile({ userInfo }) {
  const {
    name = "No info",
    bio = "No info",
    contacts,
    skills,
    isLookingForJob,
  } = userInfo

  return (
    <div
      style={{
        maxWidth: "500px",
        padding: "8px 16px",
        backgroundColor: "#31a0efac",
        marginTop: "24px",
        borderRadius: "12px",
      }}
    >
      {isLookingForJob ? (
        <h2>{name} (looking for job)</h2>
      ) : (
        <h2>{name} (not looking for job)</h2>
      )}
      <p>{bio}</p>
      <ul>
        <li>{contacts.email}</li>
        <li>{contacts.phone}</li>
        {contacts.website && (
          <li>
            <a style={{ color: "#000" }} href={contacts.website}>
              {contacts.website}
            </a>
          </li>
        )}
      </ul>
      <ul>
        <h3>Skills</h3>
        {skills.map(skill => (
          <li key={Math.random()}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}
