/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	detach,
	element,
	empty,
	handle_promise,
	init,
	insert,
	listen,
	noop,
	run_all,
	safe_not_equal,
	set_data,
	set_input_value,
	space,
	text,
	toggle_class,
	update_await_block_branch
} from '../web_modules/svelte/internal/index.mjs';

import { userbaseStore } from '../scripts/stores.js';

function create_catch_block(ctx) {
	return {
		c: noop,
		l: noop,
		m: noop,
		p: noop,
		d: noop
	};
}

// (43:0) {:then _}
function create_then_block(ctx) {
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*savedKey*/ ctx[2] && !/*editing*/ ctx[4]) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block = current_block_type(ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = empty();
		},
		l(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		d(detaching) {
			if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (48:4) {:else}
function create_else_block(ctx) {
	let form;
	let label;
	let t0;
	let t1;
	let input;
	let t2;
	let button;
	let t3;
	let mounted;
	let dispose;

	return {
		c() {
			form = element("form");
			label = element("label");
			t0 = text("API / Subscription Key");
			t1 = space();
			input = element("input");
			t2 = space();
			button = element("button");
			t3 = text(/*buttonTxt*/ ctx[1]);
			this.h();
		},
		l(nodes) {
			form = claim_element(nodes, "FORM", {});
			var form_nodes = children(form);
			label = claim_element(form_nodes, "LABEL", { for: true });
			var label_nodes = children(label);
			t0 = claim_text(label_nodes, "API / Subscription Key");
			label_nodes.forEach(detach);
			t1 = claim_space(form_nodes);
			input = claim_element(form_nodes, "INPUT", { id: true, type: true });
			t2 = claim_space(form_nodes);
			button = claim_element(form_nodes, "BUTTON", { type: true });
			var button_nodes = children(button);
			t3 = claim_text(button_nodes, /*buttonTxt*/ ctx[1]);
			button_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(label, "for", "key-input");
			attr(input, "id", "key-input");
			attr(input, "type", "text");
			attr(button, "type", "button");
		},
		m(target, anchor) {
			insert(target, form, anchor);
			append(form, label);
			append(label, t0);
			append(form, t1);
			append(form, input);
			set_input_value(input, /*userInput*/ ctx[0]);
			append(form, t2);
			append(form, button);
			append(button, t3);

			if (!mounted) {
				dispose = [
					listen(input, "input", /*input_input_handler*/ ctx[9]),
					listen(button, "click", /*saveKey*/ ctx[6])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty & /*userInput*/ 1 && input.value !== /*userInput*/ ctx[0]) {
				set_input_value(input, /*userInput*/ ctx[0]);
			}

			if (dirty & /*buttonTxt*/ 2) set_data(t3, /*buttonTxt*/ ctx[1]);
		},
		d(detaching) {
			if (detaching) detach(form);
			mounted = false;
			run_all(dispose);
		}
	};
}

// (44:4) {#if savedKey && !editing}
function create_if_block(ctx) {
	let div;
	let strong;
	let t0;
	let t1;
	let span;
	let t2;
	let t3;
	let a0;
	let t4;
	let a0_href_value;
	let t5;
	let a1;
	let t6;
	let a1_href_value;
	let mounted;
	let dispose;

	return {
		c() {
			div = element("div");
			strong = element("strong");
			t0 = text("API Key:");
			t1 = space();
			span = element("span");
			t2 = text(/*savedKey*/ ctx[2]);
			t3 = space();
			a0 = element("a");
			t4 = text(/*toggle*/ ctx[5]);
			t5 = space();
			a1 = element("a");
			t6 = text("Edit");
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			strong = claim_element(div_nodes, "STRONG", {});
			var strong_nodes = children(strong);
			t0 = claim_text(strong_nodes, "API Key:");
			strong_nodes.forEach(detach);
			t1 = claim_space(div_nodes);
			span = claim_element(div_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t2 = claim_text(span_nodes, /*savedKey*/ ctx[2]);
			span_nodes.forEach(detach);
			t3 = claim_space(div_nodes);
			a0 = claim_element(div_nodes, "A", { href: true });
			var a0_nodes = children(a0);
			t4 = claim_text(a0_nodes, /*toggle*/ ctx[5]);
			a0_nodes.forEach(detach);
			t5 = claim_space(div_nodes);
			a1 = claim_element(div_nodes, "A", { href: true });
			var a1_nodes = children(a1);
			t6 = claim_text(a1_nodes, "Edit");
			a1_nodes.forEach(detach);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span, "class", "svelte-1e0h8qg");
			toggle_class(span, "protect", /*toggle*/ ctx[5] === "show");
			attr(a0, "href", a0_href_value = "javascript:void(0)");
			attr(a1, "href", a1_href_value = "javascript:void(0)");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, strong);
			append(strong, t0);
			append(div, t1);
			append(div, span);
			append(span, t2);
			append(div, t3);
			append(div, a0);
			append(a0, t4);
			append(div, t5);
			append(div, a1);
			append(a1, t6);

			if (!mounted) {
				dispose = [
					listen(a0, "click", /*showHide*/ ctx[8]),
					listen(a1, "click", /*edit*/ ctx[7])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty & /*savedKey*/ 4) set_data(t2, /*savedKey*/ ctx[2]);

			if (dirty & /*toggle*/ 32) {
				toggle_class(span, "protect", /*toggle*/ ctx[5] === "show");
			}

			if (dirty & /*toggle*/ 32) set_data(t4, /*toggle*/ ctx[5]);
		},
		d(detaching) {
			if (detaching) detach(div);
			mounted = false;
			run_all(dispose);
		}
	};
}

// (41:20)      Loading... {:then _}
function create_pending_block(ctx) {
	let t;

	return {
		c() {
			t = text("Loading...");
		},
		l(nodes) {
			t = claim_text(nodes, "Loading...");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

function create_fragment(ctx) {
	let await_block_anchor;
	let promise;

	let info = {
		ctx,
		current: null,
		token: null,
		hasCatch: false,
		pending: create_pending_block,
		then: create_then_block,
		catch: create_catch_block,
		value: 12
	};

	handle_promise(promise = /*savePromise*/ ctx[3], info);

	return {
		c() {
			await_block_anchor = empty();
			info.block.c();
		},
		l(nodes) {
			await_block_anchor = empty();
			info.block.l(nodes);
		},
		m(target, anchor) {
			insert(target, await_block_anchor, anchor);
			info.block.m(target, info.anchor = anchor);
			info.mount = () => await_block_anchor.parentNode;
			info.anchor = await_block_anchor;
		},
		p(new_ctx, [dirty]) {
			ctx = new_ctx;
			info.ctx = ctx;

			if (dirty & /*savePromise*/ 8 && promise !== (promise = /*savePromise*/ ctx[3]) && handle_promise(promise, info)) {
				
			} else {
				update_await_block_branch(info, ctx, dirty);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(await_block_anchor);
			info.block.d(detaching);
			info.token = null;
			info = null;
		}
	};
}

const databaseName = "key";

function instance($$self, $$props, $$invalidate) {
	let userInput = "", buttonTxt = "Add key";
	let savedKey = null;
	let savedKeyID = null;

	const changeHandler = items => {
		$$invalidate(2, savedKey = items[0].item);
		savedKeyID = items[0].itemId;
	};

	userbaseStore.subscribe(userbase => {
		userbase.openDatabase({ databaseName, changeHandler }).catch(error => console.log(error));
	});

	let savePromise;

	const saveKey = () => {
		$$invalidate(1, buttonTxt = "Saving key");

		if (savedKey) {
			$$invalidate(3, savePromise = userbase.updateItem({
				databaseName,
				itemId: savedKeyID,
				item: userInput
			}));
		} else {
			$$invalidate(3, savePromise = userbase.insertItem({ databaseName, item: userInput }));
		}

		$$invalidate(4, editing = false);
	};

	let editing = false;

	const edit = () => {
		$$invalidate(4, editing = true);
		$$invalidate(0, userInput = savedKey);
		$$invalidate(1, buttonTxt = "Update key");
	};

	let toggle = "show";
	const showHide = () => $$invalidate(5, toggle = toggle === "show" ? "hide" : "show");

	function input_input_handler() {
		userInput = this.value;
		$$invalidate(0, userInput);
	}

	return [
		userInput,
		buttonTxt,
		savedKey,
		savePromise,
		editing,
		toggle,
		saveKey,
		edit,
		showHide,
		input_input_handler
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Component;