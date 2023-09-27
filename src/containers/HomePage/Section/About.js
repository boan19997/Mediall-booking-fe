import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {

    render() {

        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    <FormattedMessage id="homeheader.about" />
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/3pW9E712uC0"
                            title="Dành Cho Những Ai Đam Mê S1000RR | Tạm Biệt Cá Mập | THIS IS WHY WE RIDE 46"
                            border="0"
                            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >

                        </iframe>
                    </div>
                    <div className='content-right'>
                        <p>PGS TS BS. Bùi Hồng Thiên Khanh, Trưởng khoa Chấn thương chỉnh hình Bệnh viện Đại học Y Dược TPHCM cho biết:

                            Liệu pháp huyết tương giàu tiểu cầu (Platelet Rich Plasma - PRP) tự thân là phương pháp điều trị bằng máu tự thân, được chiết tách để thu huyết tương giàu tiểu cầu, sau đó được tiêm vào những vùng cần điều trị.

                            Đây là phương pháp điều trị các vấn đề bệnh lý cơ xương khớp như thoái hóa khớp gối, viêm gân, viêm khớp, hư sụn khớp….

                            Mời quý vị cùng theo dõi tư vấn của PGS TS BS. Bùi Hồng Thiên Khanh, Trưởng khoa Chấn thương chỉnh hình Bệnh viện Đại học Y Dược TPHCM.

                            Bệnh viện Đại học Y Dược TPHCM là bệnh viện đa khoa trực thuộc Đại học Y Dược TPHCM được xây dựng trên mô hình tiên tiến của sự kết hợp Trường-Viện với tầm nhìn trở thành Bệnh viện Đại học dẫn đầu Việt Nam và chuẩn quốc tế. Với sứ mệnh mang đến giải pháp chăm sóc sức khoẻ tối ưu bằng sự tích hợp giữa điều trị, nghiên cứu và đào tạo, Bệnh viện luôn nỗ lực phát huy những giá trị cốt lõi bền vững: Tiên phong - Thấu hiểu - Chuẩn mực - An toàn </p>
                    </div>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

//const này có tác dụng là thay cho this.props để redux map đc với react
const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
