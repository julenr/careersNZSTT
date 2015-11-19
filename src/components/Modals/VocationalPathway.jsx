class VocationalPathwayModal extends React.Component {
    render() {
        return (
                <div className="modal modal-vocation-pathways">
                    <h2 className="modal-title">Vocational pathways</h2>
                    <p>The vocational pathways help students see how their learning and achievement is valued in the 'real' world by aligning NCEA level 2 Assessment Standards including specific 'sector-related' standards with six industries.</p>
                    <ul className="sector-simple-list">
                        <li className="sector-yellow">Creative industries</li>
                        <li className="sector-green">Primary industries</li>
                        <li className="sector-blue">Services industries</li>
                        <li className="sector-purple">Social and community services</li>
                        <li className="sector-red">Manufacturing and technology</li>
                        <li className="sector-orange">Construction and infrastructure</li>
                    </ul>
                    <a className="action-close icon-cross" href="#">&nbsp;</a>
                </div>
        );
    }
}

export default VocationalPathwayModal;