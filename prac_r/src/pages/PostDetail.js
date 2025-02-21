import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './../css/PostDetail.css';

function PostDetail() {
    const { id } = useParams();

    // 임시 게시글 데이터 (실제 구현 시 API 호출 등으로 데이터를 가져올 수 있음)
    const post = {
        id,
        title: `${id}번째 게시글`,
        content: `${id}번째 게시글의 상세 내용입니다. 이곳에 게시글 내용이 들어갑니다.`,
    };

    const handleDelete = () => {
        // 삭제 처리 로직 추가
        alert('게시글이 삭제되었습니다.');
    };

    return (
        <div className="post-detail-container">
            <h1 className="post-detail-title">{post.title}</h1>
            <p className="post-detail-content">{post.content}</p>
            <div className="button-group">
                <Link to={`/post/edit/${id}`} className="edit-button">
                    수정하기
                </Link>
                <button onClick={handleDelete} className="delete-button">
                    삭제하기
                </button>
            </div>
            <Link to="/" className="back-link">목록으로 돌아가기</Link>
        </div>
    );
}

export default PostDetail;
