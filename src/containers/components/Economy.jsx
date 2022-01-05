import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { createMarkup } from '../../utils';
import { useNavigate } from 'react-router-dom';

function Economy({ values }) {
    const history = useNavigate()

    const renderImg = ({ image, description}) =>
    <img src={image.url} alt={description} width="100%" />

    const renderDescription = (description) => 
    <p dangerouslySetInnerHTML={createMarkup(description)} />

    const openPost = (id) => {
        history(`/economy/${id}`)
    }

    const renderPosst = (post, index) => {
        const { title, image, description, id } = post
        return (
            <Col span={24} md={12} key={`post-${index}`} >
                <article onClick={() => openPost(id)}>
                    <p>
                        <strong dangerouslySetInnerHTML={createMarkup(title)} />
                    </p>
                    {image?.url ? renderImg({ image, description}) : renderDescription(description)}
                </article>
            </Col>
        )
    }

    return (
        <Row gutter={[16, 16]} >
            {values?.map(renderPosst)}
        </Row>
    )
}

Economy.defaultProps = {
    values: []
}

Economy.propTypes = {
    values: PropTypes.array.isRequired
}

export default memo(Economy);