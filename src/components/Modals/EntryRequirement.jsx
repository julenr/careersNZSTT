class EntryRequirementModal extends React.Component {
    render() {
        return (
                <div className="modal modal-job-entry-requirements">
                    <h2 className="modal-title">Entry requirements for [job-name]</h2>
                    <p>There are no specific requirements to become a hunter and trapper, as most skills are learned on the job. However depending on what sort of hunting or trapping you are doing, you may need training in an aspect of the work.</p>
                    <p>If you are hunting with a rifle, you will need a firearms licence, and a hunting permit.</p>
                    <ul>
                        <li><a href="#">Police website - information about firearms licensing <span className="icon-link-ext"></span></a></li>
                        <li><a href="#">Department of Conservation website - information about hunting licences and permits <span className="icon-link-ext"></span></a></li>
                    </ul>
                    <p>Etc.</p>
                    <a className="action-close icon-cross" href="#">&nbsp;</a>
                </div>
        );
    }
}

export default EntryRequirementModal;