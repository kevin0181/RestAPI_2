import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './../css/PostEdit.css';

function PostEdit() {
    const { id } = useParams();
    const navigate = useNavigate();

    // 실제 데이터라면 API 호출로 데이터를 가져올 것임.
    // 여기서는 임시 데이터를 사용.
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // 컴포넌트가 마운트될 때 기존 게시글 데이터를 불러온다고 가정
    useEffect(() => {
        // 임시 데이터 예시
        setTitle(`${id}번째 게시글 제목`);
        setContent(`${id}번째 게시글의 상세 내용입니다. 이곳에서 게시글을 수정하세요.`);
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // 실제 구현 시 API 호출로 수정 처리
        alert('게시글이 수정되었습니다.');
        navigate(`/post/${id}`);
    };

    return (
        <div className="post-edit-container">
            <h1 className="post-edit-title">게시글 수정</h1>
            <form onSubmit={handleSubmit} className="post-edit-form">
                <div className="form-group">
                    <label htmlFor="title">제목</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="제목을 입력하세요"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">내용</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="내용을 입력하세요"
                    />
                </div>
                <div className="button-group">
                    <button type="submit" className="submit-button">수정 완료</button>
                    <Link to={`/post/${id}`} className="cancel-button">취소</Link>
                </div>
            </form>
        </div>
    );
}

export default PostEdit;
