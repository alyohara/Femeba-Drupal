<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/contrib/zeropoint/templates/navigation/menu--primary-menu.html.twig */
class __TwigTemplate_2242520e3396fc1aeaa37cf86b422d0d extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 23
        echo "<div class=\"menu-wrapper\">
  <a href=\"#\" id=\"toggles\" class=\"menu-toggle\">
    <s class=\"bars\"></s>
    <s class=\"bars\"></s>
    <div class=\"element-invisible\">toggle</div>
  </a>
<div class=\"pure-menu pure-menu-horizontal menu-transform\">
";
        // line 30
        $macros["menus"] = $this->macros["menus"] = $this;
        // line 35
        $context["attributes"] = twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => "menu"], "method", false, false, true, 35);
        // line 36
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_call_macro($macros["menus"], "macro_menu_links", [($context["items"] ?? null), ($context["attributes"] ?? null), 0], 36, $context, $this->getSourceContext()));
        echo "
";
        // line 143
        echo "</div>
</div>
";
    }

    // line 37
    public function macro_menu_links($__items__ = null, $__attributes__ = null, $__menu_level__ = null, ...$__varargs__)
    {
        $macros = $this->macros;
        $context = $this->env->mergeGlobals([
            "items" => $__items__,
            "attributes" => $__attributes__,
            "menu_level" => $__menu_level__,
            "varargs" => $__varargs__,
        ]);

        $blocks = [];

        ob_start(function () { return ''; });
        try {
            // line 38
            echo "  ";
            $context["primary_nav_level"] = ("primary-nav__menu--level-" . (($context["menu_level"] ?? null) + 1));
            // line 39
            echo "  ";
            $context["selector_primary_nav_level"] = ("primary-nav-menu--level-" . (($context["menu_level"] ?? null) + 1));
            // line 40
            echo "  ";
            $macros["menus"] = $this;
            // line 41
            echo "  ";
            if (($context["items"] ?? null)) {
                // line 42
                echo "    ";
                // line 46
                echo "    ";
                if ((($context["menu_level"] ?? null) == 1)) {
                    // line 47
                    echo "      <span data-selector=\"primary-nav-menu-🥕\" class=\"primary-nav__menu-🥕\"></span>
    ";
                }
                // line 49
                echo "    ";
                // line 50
                echo "    ";
                if ((($context["menu_level"] ?? null) == 0)) {
                    // line 51
                    echo "    ";
                    $context["navul_classes"] = [0 => "pure-menu-list"];
                    // line 52
                    echo "    ";
                } else {
                    // line 53
                    echo "    ";
                    $context["attributes"] = twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "removeClass", [0 => "pure-menu-list"], "method", false, false, true, 53);
                    // line 54
                    echo "    ";
                    $context["navul_classes"] = [0 => "pure-menu-children"];
                    // line 55
                    echo "    ";
                }
                // line 56
                echo "    <ul ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => "primary-nav__menu", 1 => ($context["navul_classes"] ?? null), 2 => ($context["primary_nav_level"] ?? null)], "method", false, false, true, 56), "setAttribute", [0 => "data-selector", 1 => ($context["selector_primary_nav_level"] ?? null)], "method", false, false, true, 56), 56, $this->source), "html", null, true);
                echo ">
      ";
                // line 57
                $context["attributes"] = twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "removeClass", [0 => ($context["primary_nav_level"] ?? null)], "method", false, false, true, 57);
                // line 58
                echo "      ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                $context['loop'] = [
                  'parent' => $context['_parent'],
                  'index0' => 0,
                  'index'  => 1,
                  'first'  => true,
                ];
                if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
                    $length = count($context['_seq']);
                    $context['loop']['revindex0'] = $length - 1;
                    $context['loop']['revindex'] = $length;
                    $context['loop']['length'] = $length;
                    $context['loop']['last'] = 1 === $length;
                }
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 59
                    echo "        ";
                    if ((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 59), "isRouted", [], "any", false, false, true, 59) && (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 59), "routeName", [], "any", false, false, true, 59) == "<nolink>"))) {
                        // line 60
                        echo "          ";
                        $context["menu_item_type"] = "nolink";
                        // line 61
                        echo "        ";
                    } elseif ((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 61), "isRouted", [], "any", false, false, true, 61) && (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 61), "routeName", [], "any", false, false, true, 61) == "<button>"))) {
                        // line 62
                        echo "          ";
                        $context["menu_item_type"] = "button";
                        // line 63
                        echo "        ";
                    } else {
                        // line 64
                        echo "          ";
                        $context["menu_item_type"] = "link";
                        // line 65
                        echo "        ";
                    }
                    // line 66
                    echo "        ";
                    $context["item_classes"] = [0 => "pure-menu-item", 1 => "primary-nav__menu-item", 2 => ("primary-nav__menu-item--" . $this->sandbox->ensureToStringAllowed(                    // line 69
($context["menu_item_type"] ?? null), 69, $this->source)), 3 => ("primary-nav__menu-item--level-" . (                    // line 70
($context["menu_level"] ?? null) + 1)), 4 => (((twig_get_attribute($this->env, $this->source,                     // line 71
$context["item"], "is_expanded", [], "any", false, false, true, 71) && twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 71))) ? ("pure-menu-has-children pure-menu-allow-hover primary-nav__menu-item--has-children") : ("")), 5 => ((twig_get_attribute($this->env, $this->source,                     // line 72
$context["item"], "is_expanded", [], "any", false, false, true, 72)) ? ("expanded") : ("")), 6 => ((twig_get_attribute($this->env, $this->source,                     // line 73
$context["item"], "is_collapsed", [], "any", false, false, true, 73)) ? ("collapsed") : ("")), 7 => ((twig_get_attribute($this->env, $this->source,                     // line 74
$context["item"], "in_active_trail", [], "any", false, false, true, 74)) ? ("active") : ("")), 8 => ((twig_get_attribute($this->env, $this->source,                     // line 75
$context["loop"], "first", [], "any", false, false, true, 75)) ? ("first") : ("")), 9 => ((twig_get_attribute($this->env, $this->source,                     // line 76
$context["loop"], "last", [], "any", false, false, true, 76)) ? ("last") : (""))];
                    // line 79
                    echo "        ";
                    $context["link_classes"] = [0 => "pure-menu-link", 1 => "primary-nav__menu-link", 2 => ("primary-nav__menu-link--" . $this->sandbox->ensureToStringAllowed(                    // line 82
($context["menu_item_type"] ?? null), 82, $this->source)), 3 => ("primary-nav__menu-link--level-" . (                    // line 83
($context["menu_level"] ?? null) + 1)), 4 => ((twig_get_attribute($this->env, $this->source,                     // line 84
$context["item"], "in_active_trail", [], "any", false, false, true, 84)) ? ("primary-nav__menu-link--active-trail") : ("")), 5 => ((twig_get_attribute($this->env, $this->source,                     // line 85
$context["item"], "below", [], "any", false, false, true, 85)) ? ("primary-nav__menu-link--has-children") : (""))];
                    // line 88
                    echo "        <li";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "attributes", [], "any", false, false, true, 88), "addClass", [0 => ($context["item_classes"] ?? null)], "method", false, false, true, 88), "setAttribute", [0 => "data-selector", 1 => ((twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 88)) ? ("primary-nav-menu-item-has-children") : (false))], "method", false, false, true, 88), 88, $this->source), "html", null, true);
                    echo ">
          ";
                    // line 94
                    echo "          ";
                    $context["aria_id"] = \Drupal\Component\Utility\Html::getId((($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "title", [], "any", false, false, true, 94), 94, $this->source) . "-submenu-") . $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 94), 94, $this->source)));
                    // line 95
                    echo "          ";
                    ob_start(function () { return ''; });
                    // line 96
                    echo "            <span class=\"primary-nav__menu-link-inner\">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "title", [], "any", false, false, true, 96), 96, $this->source), "html", null, true);
                    echo "</span>
          ";
                    $context["link_title"] = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
                    // line 98
                    echo "          ";
                    if (((($context["menu_item_type"] ?? null) == "link") || (($context["menu_item_type"] ?? null) == "nolink"))) {
                        // line 99
                        echo "            ";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->getLink((((($context["menu_item_type"] ?? null) == "link")) ? (($context["link_title"] ?? null)) : (twig_get_attribute($this->env, $this->source, $context["item"], "title", [], "any", false, false, true, 99))), $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 99), 99, $this->source), ["class" =>                         // line 100
($context["link_classes"] ?? null), "data-selector" => "primary-nav-menu-link-has-children"]), "html", null, true);
                        // line 103
                        echo "
            ";
                        // line 104
                        if (twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 104)) {
                            // line 105
                            echo "              ";
                            // line 110
                            echo "              ";
                            // line 111
                            $context["toggle_button_attributes"] = $this->extensions['Drupal\Core\Template\TwigExtension']->createAttribute(["class" => "primary-nav__button-toggle", "data-selector" => "primary-nav-submenu-toggle-button", "aria-controls" =>                             // line 114
($context["aria_id"] ?? null), "aria-expanded" => "false", "aria-hidden" => "true", "tabindex" => "-1"]);
                            // line 120
                            echo "              <button";
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["toggle_button_attributes"] ?? null), 120, $this->source), "html", null, true);
                            echo ">
                <span class=\"visually-hidden\">";
                            // line 121
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("@title sub-navigation", ["@title" => twig_get_attribute($this->env, $this->source, $context["item"], "title", [], "any", false, false, true, 121)]));
                            echo "</span>
                <span class=\"icon--menu-toggle\"></span>
              </button>
              ";
                            // line 124
                            $context["attributes"] = twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "setAttribute", [0 => "id", 1 => ($context["aria_id"] ?? null)], "method", false, false, true, 124);
                            // line 125
                            echo "              ";
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_call_macro($macros["menus"], "macro_menu_links", [twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 125), ($context["attributes"] ?? null), (($context["menu_level"] ?? null) + 1)], 125, $context, $this->getSourceContext()));
                            echo "
            ";
                        }
                        // line 127
                        echo "          ";
                    } elseif ((($context["menu_item_type"] ?? null) == "button")) {
                        // line 128
                        echo "            ";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->getLink($this->sandbox->ensureToStringAllowed(($context["link_title"] ?? null), 128, $this->source), $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 128), 128, $this->source), ["class" =>                         // line 129
($context["link_classes"] ?? null), "aria-controls" => ((twig_get_attribute($this->env, $this->source,                         // line 130
$context["item"], "below", [], "any", false, false, true, 130)) ? (($context["aria_id"] ?? null)) : (false)), "aria-expanded" => ((twig_get_attribute($this->env, $this->source,                         // line 131
$context["item"], "below", [], "any", false, false, true, 131)) ? ("false") : (false)), "data-selector" => ((twig_get_attribute($this->env, $this->source,                         // line 132
$context["item"], "below", [], "any", false, false, true, 132)) ? ("primary-nav-submenu-toggle-button") : (false))]), "html", null, true);
                        // line 134
                        echo "
            ";
                        // line 135
                        $context["attributes"] = twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "setAttribute", [0 => "id", 1 => ($context["aria_id"] ?? null)], "method", false, false, true, 135);
                        // line 136
                        echo "            ";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_call_macro($macros["menus"], "macro_menu_links", [twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 136), ($context["attributes"] ?? null), (($context["menu_level"] ?? null) + 1)], 136, $context, $this->getSourceContext()));
                        echo "
          ";
                    }
                    // line 138
                    echo "        </li>
      ";
                    ++$context['loop']['index0'];
                    ++$context['loop']['index'];
                    $context['loop']['first'] = false;
                    if (isset($context['loop']['length'])) {
                        --$context['loop']['revindex0'];
                        --$context['loop']['revindex'];
                        $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                    }
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 140
                echo "    </ul>
  ";
            }

            return ('' === $tmp = ob_get_contents()) ? '' : new Markup($tmp, $this->env->getCharset());
        } finally {
            ob_end_clean();
        }
    }

    public function getTemplateName()
    {
        return "themes/contrib/zeropoint/templates/navigation/menu--primary-menu.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  273 => 140,  258 => 138,  252 => 136,  250 => 135,  247 => 134,  245 => 132,  244 => 131,  243 => 130,  242 => 129,  240 => 128,  237 => 127,  231 => 125,  229 => 124,  223 => 121,  218 => 120,  216 => 114,  215 => 111,  213 => 110,  211 => 105,  209 => 104,  206 => 103,  204 => 100,  202 => 99,  199 => 98,  193 => 96,  190 => 95,  187 => 94,  182 => 88,  180 => 85,  179 => 84,  178 => 83,  177 => 82,  175 => 79,  173 => 76,  172 => 75,  171 => 74,  170 => 73,  169 => 72,  168 => 71,  167 => 70,  166 => 69,  164 => 66,  161 => 65,  158 => 64,  155 => 63,  152 => 62,  149 => 61,  146 => 60,  143 => 59,  125 => 58,  123 => 57,  118 => 56,  115 => 55,  112 => 54,  109 => 53,  106 => 52,  103 => 51,  100 => 50,  98 => 49,  94 => 47,  91 => 46,  89 => 42,  86 => 41,  83 => 40,  80 => 39,  77 => 38,  62 => 37,  56 => 143,  52 => 36,  50 => 35,  48 => 30,  39 => 23,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/contrib/zeropoint/templates/navigation/menu--primary-menu.html.twig", "C:\\xampp\\htdocs\\drupal\\themes\\contrib\\zeropoint\\templates\\navigation\\menu--primary-menu.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("import" => 30, "set" => 35, "macro" => 37, "if" => 41, "for" => 58);
        static $filters = array("escape" => 56, "clean_id" => 94, "t" => 121);
        static $functions = array("link" => 99, "create_attribute" => 111);

        try {
            $this->sandbox->checkSecurity(
                ['import', 'set', 'macro', 'if', 'for'],
                ['escape', 'clean_id', 't'],
                ['link', 'create_attribute']
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
