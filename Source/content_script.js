walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\b[vV][mM][wW][aA@4][rR][e3E]\b/g, "VMware"); // VMware handler
	v = v.replace(/\b[vV][sS][aA][nN]\b/g, "vSAN"); // vSAN handler

	textNode.nodeValue = v;
}
