const inputComponent = {
    props: ["placeholder"],
    template: `<input :placeholder="placeholder" class=" input is-small" type="text" v-model="input" @keyup.enter="submitNote" />`,
    data() {
        return {
            input: ""
        };
    },
    methods: {
        submitNote() {
            if (this.input !== "") {
                this.$emit("save-note", { note: this.input });
                this.input = "";
            }
        }
    }
};

new Vue({
    el: "#app",
    data: {
        notes: [],
        timestamps: [],
        placeholder: "New note"
    },
    methods: {
        saveNote(note) {
            this.notes.push(note.note);
            this.timestamps.push(new Date().toLocaleString());
        }
    },
    components: {
        "input-component": inputComponent
    }
});
