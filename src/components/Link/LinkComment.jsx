import {
	IonButton,
	IonCard,
	IonCardContent,
	IonLabel,
	IonList,
} from "@ionic/react";
import React from "react";
import UserContext from "../../context/UserContext";
import firebase from "../../firebase";
import CommentModal from "./CommentModal";
import formateDistanceToNow from "date-fns/formatDistanceToNow";

const LinkComment = ({ comment, link, setLink }) => {
	const { user } = React.useContext(UserContext);
	const [showModal, setShowModal] = React.useState(false);

	const postedByAuthUser = user && user.uid === comment.postedBy.id;

	function handleCloseModal() {
		setShowModal(false);
	}

	function handleEditComment(commentText) {
		const linkRef = firebase.db.collection("links").doc(link.id);
		linkRef.get().then((doc) => {
			if (doc.exists) {
				const previousComments = doc.data().comments;
				const newComment = {
					postedBy: { id: user.uid, name: user.displayName },
					created: Date.now(),
					text: commentText,
				};
				const updatedComments = previousComments.map((item) =>
					item.created === comment.created ? newComment : item
				);
				linkRef.update({ comments: updatedComments });
				setLink((prevState) => ({
					...prevState,
					comments: updatedComments,
				}));
			}
		});
		setShowModal(false);
	}

	function handleDeleteComment() {
		const linkRef = firebase.db.collection("links").doc(link.id);
		linkRef.get().then((doc) => {
			if (doc.exists) {
				const previousComments = doc.data().comments;
				const updatedComments = previousComments.filter(
					(item) => item.created !== comment.created
				);
				linkRef.update({ comments: updatedComments });
				setLink((prevState) => ({
					...prevState,
					comments: updatedComments,
				}));
			}
		});
	}

	return (
		<>
			<CommentModal
				isOpen={showModal}
				title="Edit Comment"
				sendAction={handleEditComment}
				closeAction={handleCloseModal}
				comment={comment}
			/>
			<IonCard>
				<IonCardContent>
					<IonList lines="none">
						<IonLabel className="ion-text-wrap">
							<p
								style={{
									alignItems: "center",
									fontSize: ".8rem",
									fontWeight: "normal",
								}}
							>
								{comment.postedBy.name} {" | "}
								{formateDistanceToNow(comment.created)}
							</p>
							<div
								className="ion-padding-vertical"
								style={{ fontSize: "1rem", color: "#000" }}
							>
								{comment.text}
							</div>
							<div>
								{postedByAuthUser && (
									<IonButton size="small" onClick={() => setShowModal(true)}>
										Edit
									</IonButton>
								)}
								{postedByAuthUser && (
									<IonButton
										size="small"
										onClick={() => handleDeleteComment(comment)}
									>
										Delete
									</IonButton>
								)}
							</div>
						</IonLabel>
					</IonList>
				</IonCardContent>
			</IonCard>
		</>
	);
};

export default LinkComment;
