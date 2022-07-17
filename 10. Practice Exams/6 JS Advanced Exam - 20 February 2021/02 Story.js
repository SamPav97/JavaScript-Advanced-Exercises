class Story {
    #likes;
    #comments;
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.#comments = [];
        this.#likes = [];
        this.idd = 1;
        this.repID = 1;
    }


    get likes() {
        let user = this.#likes[0]
        if (this.#likes.length == 0) {
            return `${this.title} has 0 likes`;
        }
        else if (this.#likes.length == 1) {
            return `${user} likes this story!`
        } else {
            return `${user} and ${this.#likes.length - 1} others like this story!`
        }
    }


    like(username) {
        if (this.#likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }
        if (username == this.creator) {
            throw new Error("You can't like your own story!");
        }

        this.#likes.push(username);
        return `${username} liked ${this.title}!`
    }

    dislike(username) {
        if (!this.#likes.includes(username)) {
            throw new Error("You can't dislike this story!")
        }
        let toRemove = this.#likes.indexOf(this.#likes.find(a => a == username));
        this.#likes.splice(toRemove, 1)
        return `${username} disliked ${this.title}`;

    }

    comment(username, content, id) {

        let checkIfIdPresent = this.#comments.find(a => a.id == id);
        if (id == undefined || checkIfIdPresent == undefined) {
            this.#comments.push({ id: this.idd, username, content, replies: [] })
            this.idd++;
            return `${username} commented on ${this.title}`
        }
        let ind = this.#comments.indexOf(checkIfIdPresent);
        let strId = `${ind + 1}.${this.#comments[ind].replies.length + 1}`
        this.#comments[ind].replies.push({ id: Number(strId), username, content });
        this.repID++;
        return "You replied successfully"
    }

    

    toString(sortingType) {

        function sortArray(arr, type) {
            for (const el of arr) {
                if (el.replies.length > 0) {
                    if (type == 'asc') {
                        el.replies.sort((a, b) => a.id - b.id)
                    } else if (type == 'desc') {
                        el.replies.sort((a, b) => b.id - a.id)
                    } else {
                        el.replies.sort((a, b) => a.username.localeCompare(b.username))
                    }
                }
            }
        }

        if (sortingType == 'asc') {
            this.#comments.sort((a, b) => a.id - b.id);
            sortArray(this.#comments, sortingType);
        } else if (sortingType == 'desc') {
            this.#comments.sort((a, b) => b.id - a.id);
            sortArray(this.#comments, sortingType);
        } else {
            this.#comments.sort((a, b) => a.username.localeCompare(b.username));
            sortArray(this.#comments, sortingType);
        }

        let res = `Title: ${this.title}\n`;
        res += `Creator: ${this.creator}\n`;
        res += `Likes: ${this.#likes.length}\n`;
        res += 'Comments:\n'

        if (this.#comments.length == 0) {
            return res
        }
        let toJoin = [];
        for (const comment of this.#comments) {
            toJoin.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`)
            if (comment.replies) {
                for (const reply of comment.replies) {
                    toJoin.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`)
                }

            }

        }
        res += toJoin.join('\n')

        return res

    }
}


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));



