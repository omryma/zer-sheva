import React from 'react';

const ModalImage = (props) => {
  return(
    <div className="modal fade" id="imgModal" role="dialog">
    <div className="modal-dialog">
        <div className="modal-content">
        <button type="button" class="close" data-dismiss="modal">&times; </button>
            <img className="img-responsive" src={props.source} alt="zer" />
        </div>
    </div>
    </div>
  );
};

export default ModalImage;