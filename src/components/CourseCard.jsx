import { Link } from "react-router-dom";

function CourseCard({ course, isFavorite, onToggleFavorite }) {
  return (
    <article className="card course-card">
      <div className="course-card-top">
        {/* Badge kode mata kuliah */}
        <span className="badge">{course.kode}</span>

        {}
        <button
          className={isFavorite ? "fav-btn active" : "fav-btn"}
          onClick={() => onToggleFavorite(course.kode)}
          aria-label={
            isFavorite
              ? `Hapus ${course.nama} dari favorit`
              : `Tambahkan ${course.nama} ke favorit`
          }
          aria-pressed={isFavorite}
        >
          {isFavorite ? "★" : "☆"}
        </button>
      </div>

      {}
      <h3>
        <Link to={`/mata-kuliah/${course.kode}`}>{course.nama}</Link>
      </h3>

      <p className="course-meta">
        {course.sks} SKS • Semester {course.semester}
      </p>
    </article>
  );
}

export default CourseCard;
